import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import PostCard from '../../components/PostCard';
import {SEARCH_POSTS_REQUEST} from '../../reducers/post'
import { Pagination } from 'antd';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'
import wrapper from "../../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'

const keyword = () => {
    const [current,setCurrent] = useState(1);
    const {Posts} = useSelector((state)=>(state.post));
    console.log("posts : ", Posts);
    let startIndex = 0; 
    let lastIndex = 6;
    const [showPosts, setShowPosts] = useState(Posts.slice(startIndex,lastIndex));
    const router = useRouter();
    const { keyword } = router.query;

    const onChange = useCallback(page => {
        setCurrent(page);
        console.log(current);
        startIndex = (page-1) * 6;
        lastIndex = startIndex + 6;
        setShowPosts(Posts.slice(startIndex,lastIndex));
    },[current,showPosts]);
    

    return (
        <>
            <Head>
                <title>{keyword}검색</title>
            </Head>
            <AppLayout>
                {console.log("return안에 : ", showPosts)}
                {showPosts.map((post)=> <PostCard  key = {post.id} post = {post} style/>)}
                <Pagination style = {{textAlign : "center", marginTop : "20px", marginBottom : "15px"}} current={current} onChange={onChange} total={Posts.length*2} />
            </AppLayout>
        </> 
    );
};

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
        type : SEARCH_POSTS_REQUEST,
        data: context.params.keyword,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });
  

export default keyword;