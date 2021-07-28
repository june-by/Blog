import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import KaKaoLogin from 'react-kakao-login'
import useInput from '../hooks/useInput';
import { KAKAO_LOG_IN_REQUEST, LOG_IN_REQUEST } from '../reducers/user';
import { RiKakaoTalkFill, RiFacebookBoxFill, RiGoogleFill } from 'react-icons/ri'
const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;
const Button2 = styled(Button)`
  margin-left : 15px;
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
      alert(logInError);
    }
  }, [logInError]);

  const kakaologin = useCallback(() => {
    dispatch({
      type : KAKAO_LOG_IN_REQUEST,
    })
  },[])

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
          <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
      </FormWrapper>
      <div style = {{margin : "10px"}}>
        <Button href = "http://localhost:3085/user/kakao"><RiKakaoTalkFill />카카오 로그인</Button>
        <Button2 href = "http://localhost:3085/user/facebook"> <RiFacebookBoxFill />페이스북 로그인</Button2>
        <Button2> < RiGoogleFill/>구글 로그인</Button2>
      </div>
    </>
  );
};

export default LoginForm;