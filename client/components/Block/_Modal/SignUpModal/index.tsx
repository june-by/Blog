import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { useSignUp } from "../../../../Hooks/User";
import Modal from "../../../../utils/Modal";
import styles from "./styles.module.scss";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpModal = ({ setOpen }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const signUpMutation = useSignUp(closeModal);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!emailRef.current || !passwordRef.current || !passwordCheckRef.current || !nicknameRef.current) return;
      if (passwordRef.current.value !== passwordCheckRef.current.value) return alert("* 비밀번호와 비밀번호확인이 일치하지 않습니다");

      const reqData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        nickname: nicknameRef.current.value,
      };

      signUpMutation.mutate(reqData);
    },
    [signUpMutation]
  );

  return (
    <div>
      <Modal setOpen={setOpen}>
        <>
          <div className={styles.SignUpTitle}>
            <span>회원가입</span>
            <Image onClick={closeModal} src="/close_btn.png" width={35} height={35} alt="닫기" />
          </div>
          <form onSubmit={submit} className={styles.Form}>
            <input data-testid="emailInput" ref={emailRef} placeholder="이메일 혹은 아이디" />
            <input data-testid="passwordInput" ref={passwordRef} type="password" placeholder="비밀번호" />
            <input data-testid="passwordCheckInput" ref={passwordCheckRef} type="password" placeholder="비밀번호확인" />
            <input data-testid="nicknameInput" ref={nicknameRef} placeholder="닉네임" />
            <button>회원가입</button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default SignUpModal;
