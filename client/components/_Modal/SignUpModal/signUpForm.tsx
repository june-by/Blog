import React from "react";
import styles from "./styles.module.scss";
import CloseButton from "../shared/closeButton";
import { useHeaderContext } from "context/headerContext";
import SocialLoginButtons from "../shared/socialLoginButtons";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  passwordCheckRef: React.RefObject<HTMLInputElement>;
  nicknameRef: React.RefObject<HTMLInputElement>;
}

const SignUpForm = ({ onSubmit, emailRef, passwordRef, passwordCheckRef, nicknameRef }: Props) => {
  const { closeSignUp } = useHeaderContext();

  return (
    <div>
      <div className={styles.SignUpTitle}>
        <span>회원가입</span>
        <CloseButton onClick={closeSignUp} data-testid="signUpCloseBtn" />
      </div>
      <form onSubmit={onSubmit} className={styles.Form}>
        <input data-testid="emailInput" ref={emailRef} placeholder="이메일 혹은 아이디" />
        <input data-testid="passwordInput" ref={passwordRef} type="password" placeholder="비밀번호" />
        <input data-testid="passwordCheckInput" ref={passwordCheckRef} type="password" placeholder="비밀번호확인" />
        <input data-testid="nicknameInput" ref={nicknameRef} placeholder="닉네임" />
        <button>회원가입</button>
      </form>
      <SocialLoginButtons />
    </div>
  );
};

export default SignUpForm;
