import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector,useDispatch} from 'react-redux';
import PostCard from '../components/PostCard';
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'


const Home = () => {
    const dispatch = useDispatch();
    const {logInDone} = useSelector((state)=>state.user);
    useEffect(()=>{
      if(logInDone !== true)
      {
        dispatch({
          type : LOAD_MY_INFO_REQUEST
        })
      }
    },[]);

    const {Posts} = useSelector((state)=>(state.post));
    return(
        <AppLayout>
            {Posts.map((post)=> <PostCard  key = {post.id} post = {post} style/>)}
        </AppLayout>
    );
}

export default Home;