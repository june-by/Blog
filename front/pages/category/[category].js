import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import React from 'react';
import Head from 'next/head';
import PostCard from '../../components/PostCard';

//More button을 누르면, 해당 글의 id를 가지고 Post Component로 온다
//그렇다면 나는 서버로 해당 id에 해당하는 글을 가지고 와서 이를 보여주면댐.
const category = () => {
    const router = useRouter();
    const { category } = router.query;
    const {Posts} = useSelector((state)=>(state.post));
    const categoryPosts = Posts.filter((v)=>v.category === category);
    return (
        
        <>
            <Head>
                <title>{category}</title>
            </Head>
            <AppLayout>
                {categoryPosts.map((post)=> <PostCard  key = {post.id} post = {post} style/>)}
            </AppLayout>
        </>
    );
};

export default category;