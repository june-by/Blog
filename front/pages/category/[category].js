import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import PostCard from '../../components/PostCard';
import {LOAD_CATEGORYPOSTS_REQUEST} from '../../reducers/post'
import { Pagination } from 'antd';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'
import wrapper from "../../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'

//More button을 누르면, 해당 글의 id를 가지고 Post Component로 온다
//그렇다면 나는 서버로 해당 id에 해당하는 글을 가지고 와서 이를 보여주면댐.
const category = () => {
    const [current,setCurrent] = useState(1);
    const {Posts} = useSelector((state)=>(state.post));
    let startIndex = 0; 
    let lastIndex = 6;
    const [showPosts, setShowPosts] = useState(Posts.slice(startIndex,lastIndex));
    const router = useRouter();
    const { category } = router.query;

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
                <title>{category}</title>
            </Head>
            <AppLayout>
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
        type : LOAD_CATEGORYPOSTS_REQUEST,
        data: context.params.category,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });
  

export default category;