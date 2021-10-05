import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'
import { message } from 'antd';

const Login = () => {

    const {me, logInDone} = useSelector((state)=>state.user);
    const id = me?.id;
    useEffect(()=>{
        if(me && id){
            if(logInDone){
                message.success("로그인이 완료되었습니다! 메인화면으로 이동합니다.");
                Router.replace('/');
            }
             else{
                message.error("이미 로그인한 사용자입니다. 메인화면으로 이동합니다.");
                Router.replace('/');
            }
            
        }
    },[me,id])


    return (
        <>
            <Head>
                <title>로그인</title>
            </Head>
            <AppLayout>
                <LoginForm />
            </AppLayout>
        </>
    );
}


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    })
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default Login;