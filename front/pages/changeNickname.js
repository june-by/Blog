import React, { useCallback, useEffect } from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Button,message } from 'antd';
import useInput from '../hooks/useInput';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import Router from 'next/router';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'

const changeNickname = () => {

    const dispatch = useDispatch();

    const {changeNicknameLoading, me,changeNicknameDone, changeNicknameError} = useSelector((state)=>state.user);
    
    useEffect(()=>{
        if(!me){
            message.error("로그인 해야 합니다");
            Router.replace('/');
        }
        if(changeNicknameDone)
        {
            Router.replace('/');
        }
        if(changeNicknameError)
        {
            message.error(changeNicknameError);
            setNickname('');
        }
    },[changeNicknameDone,changeNicknameError,me])


    const [nickname, onChangeNickname, setNickname] = useInput('');

    const onSubmitNickname = useCallback(() => {
        console.log(nickname);
        dispatch({
            type : CHANGE_NICKNAME_REQUEST,
            data : nickname,
        })
    },[nickname]);

    
    return (
        <>
            <Head>
                <title>닉네임 수정</title>
            </Head>
            <AppLayout>
                <Form onFinish = {onSubmitNickname} style = {{textAlign : "center", marginTop : "25px"}}>
                    <div style = {{display : "inline-block"}}>
                        <Input name="user-nick" placeholder = "nickname" value={nickname} required onChange={onChangeNickname}/>
                    </div>
                    <Button type="primary" htmlType="submit" loading={changeNicknameLoading}>변경</Button>
                </Form>
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

export default changeNickname;