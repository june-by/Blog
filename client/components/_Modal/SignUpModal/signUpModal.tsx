import React, { useRef } from "react";
import { useSignUp } from "Hooks/User";
import Modal from "components/_hoc/Modal";
import styles from "./styles.module.scss";
import SocialLoginButtons from "components/_Modal/common/socialLoginButtons";
import { useHeaderContext } from "context/headerContext";
import CloseButton from "../common/closeButton";

const SignUpModal = () => {
  const { closeSignUp } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const { mutate: signUpMutate } = useSignUp(closeSignUp);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current || !passwordCheckRef.current || !nicknameRef.current) return;
    if (passwordRef.current.value !== passwordCheckRef.current.value)
      return alert("* 비밀번호와 비밀번호확인이 일치하지 않습니다");

    const reqData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      nickname: nicknameRef.current.value,
    };

    signUpMutate(reqData);
  };

  return (
    <div>
      <Modal closeModal={closeSignUp}>
        <>
          <div className={styles.SignUpTitle}>
            <span>회원가입</span>
            <CloseButton onClick={closeSignUp} data-testid="signUpCloseBtn" />
          </div>
          <form onSubmit={submit} className={styles.Form}>
            <input data-testid="emailInput" ref={emailRef} placeholder="이메일 혹은 아이디" />
            <input data-testid="passwordInput" ref={passwordRef} type="password" placeholder="비밀번호" />
            <input data-testid="passwordCheckInput" ref={passwordCheckRef} type="password" placeholder="비밀번호확인" />
            <input data-testid="nicknameInput" ref={nicknameRef} placeholder="닉네임" />
            <button>회원가입</button>
          </form>
          <SocialLoginButtons />
        </>
      </Modal>
    </div>
  );
};

export default SignUpModal;
