import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Head from 'next/head';
import { useEffect } from "react";
import PostCard from '../../components/PostCard';
import {LOAD_CATEGORYPOSTS_REQUEST} from '../../reducers/post'
//More button을 누르면, 해당 글의 id를 가지고 Post Component로 온다
//그렇다면 나는 서버로 해당 id에 해당하는 글을 가지고 와서 이를 보여주면댐.
const category = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { category } = router.query;
    const {Posts} = useSelector((state)=>(state.post));
    useEffect(()=>{
        if(category){
            dispatch({
                type : LOAD_CATEGORYPOSTS_REQUEST,
                data : category,
            })
        }
    },[category])
    return (
        
        <>
            <Head>
                <title>{category}</title>
            </Head>
            <AppLayout>
                {Posts.map((post)=> <PostCard  key = {post.id} post = {post} style/>)}
            </AppLayout>
        </>
    );
};

export default category;