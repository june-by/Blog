import React, { useEffect } from 'react';
import AppLayout from "../../components/AppLayout";
import Head from 'next/head';
import  Router, {useRouter } from 'next/router';
import WritePostForm from '../../components/WritePostForm';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'
import {message} from 'antd';
import wrapper from "../../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'
import { useSelector } from 'react-redux';

const UpdatePost= () => {
    const {me} = useSelector((state)=>state.user);
    const router = useRouter();
    const { id } = router.query;
    useEffect(()=>{
        if(me.email !== "neostgeart@gmail.com")
        {
            message.error("글 수정 권한이 없습니다");
            Router.replace('/');
        }
    },[me])

    return (
        <>
            <Head>
                <title>글수정하기</title>
            </Head>
            <AppLayout>
                <WritePostForm id = {id}/>
            </AppLayout>
        </>
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
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default UpdatePost;