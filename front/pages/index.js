import React,{useState,useCallback, useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import { useSelector, useDispatch} from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'
import { createGlobalStyle } from "styled-components";
import { Pagination } from 'antd';
import ListComponent from '../components/ListComponent';

export const Global = createGlobalStyle`
    .ant-pagination-options{
        display : none;
    }
`;

const Home = () => {
  const dispatch = useDispatch();
  const [current,setCurrent] = useState(1);
  const {Posts, currentPageNum} = useSelector((state)=>(state.post));

  useEffect(()=>{
    setCurrent(currentPageNum);
  },[currentPageNum])

  const onChange = useCallback((page) => {
    return dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
      data : {
        page
      }
    })
  },[]);

  return (
    <AppLayout>
      <ListComponent Posts = {Posts}/>
      <div style = {{marginBottom : "15px"}}></div>
      <Global />
      <Pagination style = {{textAlign : "center", marginTop : "20px", marginBottom : "15px"}} current={current} onChange={onChange} total={80} />
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
    type: LOAD_MAIN_POSTS_REQUEST,
    data : {
      page : 1
    }
  });
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  })
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;