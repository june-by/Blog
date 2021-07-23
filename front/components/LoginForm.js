
import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import propTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import {loginAction} from '../reducers/user'

const LoginButton = styled(Button)`
    margin-right : 10px;
`;

const ButtonWrapper = styled.div`
    margin-top : 10px;
`
const FormWrapper = styled(Form)`
    padding : 10px;
`

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
    const dispatch = useDispatch();
    
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(id,password);
        dispatch(loginAction({id,password}));
    },[id,password]);

    return (
        <FormWrapper onFinish = {onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input name="user-id" onChange={onChangeId}
                    require />
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input name="user-password"
                    type="password"
                    onChange={onChangePassword}
                    require />
            </div>
            <ButtonWrapper>
                <LoginButton type="primary"
                    htmlType="submit"
                    loading={false}>로그인</LoginButton>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};


export default LoginForm;