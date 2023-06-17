import React, { useRef } from "react";
import { useLogin } from "Hooks/User";
import Modal from "components/_hoc/Modal";
import styles from "./styles.module.scss";
import SocialLoginButtons from "components/_Modal/shared/socialLoginButtons";
import { useHeaderContext } from "context/headerContext";
import CloseButton from "../shared/closeButton";

const LoginModal = () => {
  const { closeLogin, openSignUp } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: loginMutate } = useLogin(closeLogin);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    if (emailRef.current.value === "") return alert("* 아이디를 입력해주세요.");
    if (passwordRef.current.value === "") return alert("* 비밀번호를 입력해주세요.");

    const reqData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginMutate(reqData);
  };

  return (
    <Modal closeModal={closeLogin}>
      <>
        <div className={styles.LoginTitle}>
          <span>로그인</span>
          <CloseButton onClick={closeLogin} data-testid="closebtn" />
        </div>
        <form onSubmit={submit} className={styles.Form}>
          <input data-testid="emailInput" ref={emailRef} placeholder="이메일 혹은 아이디" />
          <input data-testid="passwordInput" ref={passwordRef} type="password" placeholder="비밀번호" />
          <button>로그인</button>
        </form>
        <button onClick={openSignUp} className={styles.signUpButton}>
          회원가입
        </button>
        <SocialLoginButtons />
      </>
    </Modal>
  );
};

export default LoginModal;
