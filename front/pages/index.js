import React from 'react';
import AppLayout from "../components/AppLayout";
import { useSelector} from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'
import ListComponent from '../components/ListComponent';

const Home = () => {
  const { Posts } = useSelector((state) => (state.post));
  return (
    <AppLayout>
      <ListComponent Posts = {Posts}/>
      <div style = {{marginBottom : "15px"}}></div>
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
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