import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import {LOG_IN_REQUEST } from '../reducers/user';
import { RiKakaoTalkFill, RiFacebookBoxFill, RiGoogleFill } from 'react-icons/ri'
import {backUrl} from '../config/config';
const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const IdWrapper = styled.div`
  margin-bottom: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;


const Button3 = styled(Button)`
  display : block;
  margin : auto;
  width : 100%;
  border-radius : 30px;
  margin-bottom : 10px;
`;

const Input2 = styled(Input)`
  border-radius : 20px;
`;

const LoginFormWrapper = styled.div`
  margin: auto;
  margin-top : 30px;
  border: 1px solid lightgrey;
  border-radius: 40px;
  padding: 30px;
  height: 400px;
  width : 80%;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  useEffect(() => {
    if (logInError) {
      message.error(logInError);
    }
  }, [logInError]);


  return (
    <>
      <LoginFormWrapper>
      <FormWrapper onFinish={onSubmitForm}>
        <IdWrapper>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input2 name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </IdWrapper>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input2
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button3 type="primary" htmlType="submit" loading={logInLoading}>로그인</Button3>
          <Link href="/signup"><a><Button3>회원가입</Button3></a></Link>
          <Button3 href =  "http://api.byjuun.com/user/kakao"><RiKakaoTalkFill />카카오 로그인</Button3>
          <Button3 href = "http://api.byjuun.com/user/facebook"> <RiFacebookBoxFill />페이스북 로그인</Button3>
          <Button3 href = "http://api.byjuun.com/user/google"> < RiGoogleFill/>구글 로그인</Button3>
        </ButtonWrapper>
      </FormWrapper>
      </LoginFormWrapper>
    </>
  );
};

export default LoginForm;