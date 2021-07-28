import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import { RiKakaoTalkFill, RiFacebookBoxFill, RiGoogleFill } from 'react-icons/ri'
import styled from 'styled-components';
import { SIGN_UP_REQUEST } from '../reducers/user';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const Button2 = styled(Button)`
  margin-left : 15px;
`;


const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const { signUploading, me,signUpDone, signUpError } = useSelector((state) => state.user);
  const id = me?.id;
  
  useEffect(()=>{
    if(me && id){
      Router.replace('/');
    }
  },[me,id])

  useEffect(() => {
    if(signUpDone){
      Router.push('/')
    }
  }, [signUpDone]);
  
  useEffect(() => {
    if(signUpError){
      alert(signUpError);
    }
  }, [signUpError]);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        password,
        nickname,
      },
    });
  }, [email, password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입에 동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUploading}>가입하기</Button>
          <Button2 href = "http://localhost:3085/user/kakao"><RiKakaoTalkFill /> 카카오 로그인</Button2>
          <Button2 href = "http://localhost:3085/user/facebook"> <RiFacebookBoxFill /> 페이스북 로그인</Button2>
          <Button2> <RiGoogleFill /> 구글 로그인</Button2>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;