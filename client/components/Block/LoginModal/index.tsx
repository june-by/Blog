import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { useLogin } from "../../../Hooks/User";
import Modal from "../../../utils/Modal";
import styles from "./styles.module.scss";
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
            <button onClick={closeModal}>
              <Image src="/close_btn.png" width={35} height={35} alt="닫기" />
            </button>
          </div>
          <form onSubmit={submit} className={styles.Form}>
            <input ref={emailRef} placeholder="이메일 혹은 아이디" />
            <input ref={passwordRef} type="password" placeholder="비밀번호" />
            <button>로그인</button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default LoginModal;
