import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import { RiKakaoTalkFill, RiFacebookBoxFill, RiGoogleFill } from 'react-icons/ri'
import styled from 'styled-components';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios';

const Button2 = styled(Button)`
  margin-right : 15px;
`;

const SignUpFormWrapper = styled.div`
  margin: auto;
  margin-top : 30px;
  border: 1px solid lightgrey;
  border-radius: 40px;
  padding: 30px;
  height: 530px;
  width : 60%;
`;


const Input2 = styled(Input)`
  border-radius : 20px;
`;

const Button3 = styled(Button)`
  display : block;
  margin : auto;
  width : 100%;
  border-radius : 30px;
  margin-bottom : 10px;
`;

const Inputwrapper = styled.div`
  margin-bottom : 10px;
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
      <SignUpFormWrapper>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <Inputwrapper>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input2 name="user-email" value={email} required onChange={onChangeEmail} />
        </Inputwrapper>
        <Inputwrapper>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input2 name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </Inputwrapper>
        <Inputwrapper>
          <label2 htmlFor="user-password">비밀번호</label2>
          <br />
          <Input2 name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </Inputwrapper>
        <Inputwrapper>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input2
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </Inputwrapper>
        <Inputwrapper>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입에 동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </Inputwrapper>
        <div style={{ marginTop: "10px" }}>
          <Button3 type="primary" htmlType="submit" loading={signUploading}>가입하기</Button3>
        </div>
        <div style = {{marginTop : "10px"}}>
          <Button3 href = "http://localhost:3085/user/kakao"><RiKakaoTalkFill /> 카카오 회원가입</Button3>
          <Button3 href = "http://localhost:3085/user/facebook"> <RiFacebookBoxFill /> 페이스북 회원가입</Button3>
          <Button3> <RiGoogleFill /> 구글 회원가입</Button3>
        </div>
      </Form>
      </SignUpFormWrapper>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('getServerSideProps start');
  console.log(context.req.headers);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  console.log('getServerSideProps end');
  await context.store.sagaTask.toPromise();
});

export default Signup;