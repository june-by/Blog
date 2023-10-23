import React, { FormEventHandler, useState } from "react";
import styles from "./styles.module.scss";
import Modal from "../../Modal/Modal";
import { StateUpdater } from "@Types/utils";
import useInput from "@hooks/useInput";
import { useLogin } from "@hooks/query";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import { SocialLoginArea } from "@components/shared/SocialLoginArea";
import useModals from "@hooks/useModals";
import { MODALS } from "../Modals";

interface Props {
  onClose: () => void;
}

const LoginModal = ({ onClose }: Props) => {
  const { openModal } = useModals();
  const [email, , onChangeEmail] = useInput("");
  const [password, , onChangePassword] = useInput("");

  const { mutate: loginMutate } = useLogin({
    onSuccess: () => {
      toast.success(MESSAGE.LOGIN_SUCCESS);
      onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (email === "") {
      return toast.error(MESSAGE.NEED_EMAIL);
    }
    if (password === "") {
      return toast.error(MESSAGE.NEED_PASSWORD);
    }

    loginMutate({ email, password });
  };

  return (
    <Modal title="로그인" onClose={onClose}>
      <form className={styles.Form} onSubmit={onSubmit}>
        <input
          value={email}
          onChange={onChangeEmail}
          data-testid="emailInput"
          placeholder="이메일 혹은 아이디"
        />
        <input
          value={password}
          onChange={onChangePassword}
          data-testid="passwordInput"
          type="password"
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </form>
      <button
        className={styles.SignUpButton}
        onClick={() => {
          onClose();
          openModal(MODALS.SIGNUP);
        }}
      >
        회원가입
      </button>
      <SocialLoginArea />
    </Modal>
  );
};

export default LoginModal;
