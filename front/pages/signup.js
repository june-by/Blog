import React, {useCallback, useState} from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
const ErrorMessage = styled.div`
    color : red;
`;

const SignupButton = styled.div`
    margin-top : 10px;
`;

const Signup = () => {

    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const [id , setId] = useState('');
    const [idError,setIdError] = useState(false);
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
        if(id.length<4 && id.length>-1)
        {
            setIdError(true);
        }
        else if(id.length === -1 || id.length >= 4)
        {
            setIdError(false);
        }
    },[id]);

    const [passwordcheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[])

    const onSubmitForm = useCallback(() => { //e.preventDefault안해도 된다. 안에서 자동으로 이루어짐
        if(id.length<4 && id.length>-1)
        {
            return setIdError(true);
        }
        if(password !== passwordcheck) 
        {
            return setPasswordError(true);
        }
        if(!term)
        {
            return setTermError(true);
        }
        console.log(id, nickname, password)
    },[id,password,passwordcheck, term]);

    return (
        <>
            <AppLayout>
                <Head>
                    <title>회원가입 | Nodebird</title>
                </Head>
                <Form onFinish={onSubmitForm}>
                    <div>
                        <label htmlFor="used-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} style = {{width : "400px"}}/>
                        {idError && <ErrorMessage>아이디는 5글자이상이어야 합니다.</ErrorMessage>}
                    </div>
                    <div>
                        <label htmlFor="used-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nickname} required onChange={onChangeNickname} style = {{width : "400px"}}/>
                    </div>
                    <div>
                        <label htmlFor="used-password">비밀번호</label>
                        <br />
                        <Input name="user-password" type = "password" value={password} 
                        required onChange={onChangePassword} style = {{width : "400px"}}/>
                    </div>
                    <div>
                        <label htmlFor="used-password">비밀번호체크</label>
                        <br />
                        <Input name="user-password-check" type = "password" value={passwordcheck} 
                        required onChange={onChangePasswordCheck} style = {{width : "400px"}}/>
                        {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
                    </div>
                    <div>
                        <Checkbox name = "user-term" checked = {term} onChange = {onChangeTerm}>약관동의하셔야 합니다</Checkbox>
                        {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
                    </div>
                    <SignupButton>
                        <Button type = "primary" htmlType = "submit">가입하기</Button>
                    </SignupButton>
                </Form>
            </AppLayout>
        </>
    );
}

export default Signup;