import React from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector} from 'react-redux';
import PostCard from '../components/PostCard';



const Home = () => {
    const {Posts} = useSelector((state)=>(state.post));
    console.log(Posts.length);
    return(
        <AppLayout>
            {Posts.map((post)=> <PostCard  key = {post.id} post = {post} style/>)}
        </AppLayout>
    );
}

export default Home;