import React, { useCallback, useRef } from "react";
import { useLogin } from "Hooks/User";
import Modal from "components/_hoc/Modal";
import styles from "./styles.module.scss";
import CloseIcon from "components/Icon/close";

import SocialLoginBtns from "components/Block/SocialLoginBtns";
interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ setOpen }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const loginMutation = useLogin(closeModal);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!emailRef.current || !passwordRef.current) return;
      if (emailRef.current.value === "") return alert("* 아이디를 입력해주세요.");
      if (passwordRef.current.value === "") return alert("* 비밀번호를 입력해주세요.");

      const reqData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      loginMutation.mutate(reqData);
    },
    [loginMutation]
  );

  return (
    <div>
      <Modal setOpen={setOpen}>
        <>
          <div className={styles.LoginTitle}>
            <span>로그인</span>
            <button onClick={closeModal} data-testid="closebtn">
              <CloseIcon />
            </button>
          </div>
          <form onSubmit={submit} className={styles.Form}>
            <input data-testid="emailInput" ref={emailRef} placeholder="이메일 혹은 아이디" />
            <input data-testid="passwordInput" ref={passwordRef} type="password" placeholder="비밀번호" />
            <button>로그인</button>
          </form>
          <SocialLoginBtns />
        </>
      </Modal>
    </div>
  );
};

export default LoginModal;
