import { useHeaderContext } from "context/headerContext";
import React from "react";
import styles from "./styles.module.scss";
import CloseButton from "../shared/closeButton";
import SocialLoginButtons from "../shared/socialLoginButtons";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
}

const LoginForm = ({ onSubmit, emailRef, passwordRef }: Props) => {
  const { closeLogin, openSignUp } = useHeaderContext();

  return (
    <div>
      <div className={styles.LoginTitle}>
        <span>로그인</span>
        <CloseButton onClick={closeLogin} data-testid="closebtn" />
      </div>
      <form onSubmit={onSubmit} className={styles.Form}>
        <input data-testid="emailInput" ref={emailRef} placeholder="이메일 혹은 아이디" />
        <input data-testid="passwordInput" ref={passwordRef} type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </form>
      <button onClick={openSignUp} className={styles.signUpButton}>
        회원가입
      </button>
      <SocialLoginButtons />
    </div>
  );
};

export default LoginForm;
