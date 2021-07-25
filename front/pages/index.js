import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector,useDispatch} from 'react-redux';
import PostCard from '../components/PostCard';
import {LOAD_POSTS_REQUEST} from '../reducers/post';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
          type: LOAD_POSTS_REQUEST,
        });
      }, []);

    const {Posts} = useSelector((state)=>(state.post));
    return(
        <AppLayout>
            {Posts.map((post)=> <PostCard  key = {post.id} post = {post} style/>)}
        </AppLayout>
    );
}

export default Home;