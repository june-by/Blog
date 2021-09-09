import React from 'react';
import AppLayout from "../components/AppLayout";
import { useSelector} from 'react-redux';
import PostCard from '../components/PostCard';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'

const Home = () => {
  const { Posts } = useSelector((state) => (state.post));
  return (
    <AppLayout>
      {Posts.map((post) => <PostCard key={post.id} post={post}  />)}
      <div style = {{marginBottom : "20px"}}></div>
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  //원래 브라우저에서 cookie를 알아서 넣어주는데 , SSR시에는 브라우저 개입을 못하니까 프론트서버에서 헤더에 쿠키를 넣어서 보내줘야 한다.
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  })
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;