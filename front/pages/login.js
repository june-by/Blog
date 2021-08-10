import React,{useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Signup = () => {

    const {me} = useSelector((state)=>state.user);
    const id = me?.id;
    useEffect(()=>{
        if(me && id){
        Router.replace('/');
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

export default Signup;