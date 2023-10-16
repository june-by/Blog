import { useHeaderContext } from "@contexts/headerContext";
import React, { type FormEvent, type RefObject } from "react";
import ModalView from "@components/shared/ModalView";
import styles from "./styles.module.scss";

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
}

const {
  Header,
  Title,
  CloseButton,
  Form,
  Input,
  SubmitButton,
  SocialLoginArea,
} = ModalView;

const LoginForm = ({ onSubmit, emailRef, passwordRef }: Props) => {
  const { closeLogin, openSignUp } = useHeaderContext();

  return (
    <ModalView>
      <Header>
        <Title title="로그인" />
        <CloseButton handleClose={closeLogin} data-testid="closebtn" />
      </Header>
      <Form handleSubmit={onSubmit}>
        <Input
          data-testid="emailInput"
          ref={emailRef}
          placeholder="이메일 혹은 아이디"
        />
        <Input
          data-testid="passwordInput"
          ref={passwordRef}
          type="password"
          placeholder="비밀번호"
        />
        <SubmitButton>로그인</SubmitButton>
      </Form>
      <button onClick={openSignUp} className={styles.signUpButton}>
        회원가입
      </button>
      <SocialLoginArea />
    </ModalView>
  );
};

export default LoginForm;
