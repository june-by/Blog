import React, { useCallback, useEffect } from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import Router from 'next/router';

const changeNickname = () => {

    const dispatch = useDispatch();

    const {changeNicknameLoading, me,changeNicknameDone} = useSelector((state)=>state.user);
    
    useEffect(()=>{
        if(changeNicknameDone)
        {
            Router.replace('/');
        }
    },[changeNicknameDone])

    const [nickname, onChangeNickname] = useInput('');
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
                <Form onFinish = {onSubmitNickname}>
                    <div style = {{display : "inline-block"}}>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
                    </div>
                    <Button type="primary" htmlType="submit" loading={changeNicknameLoading}>변경</Button>
                </Form>
            </AppLayout>
        </>
    );
}

export default changeNickname;