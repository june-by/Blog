import React, { FormEventHandler } from "react";
import styles from "./styles.module.scss";
import { useInput } from "@hooks";
import Modal from "../Modal";
import { StateUpdater } from "@Types/utils";
import { SocialLoginArea } from "@components/shared/SocialLoginArea";
import { useSignUp } from "@hooks/query";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";

interface Props {
  setOpenSignUpModal: StateUpdater<boolean>;
}

const SignUpModal = ({ setOpenSignUpModal }: Props) => {
  const [email, , onChangeEmail] = useInput("");
  const [password, , onChangePassword] = useInput("");
  const [passwordCheck, , onChangePasswordCheck] = useInput("");
  const [nickname, , onChangeNickname] = useInput("");

  const { mutate: signUpMutate } = useSignUp({
    onSuccess: () => {
      setOpenSignUpModal(false);
      toast.success(MESSAGE.SIGHUP_SUCCESS);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return toast.error(MESSAGE.PASSWORD_AND_CHECK_NOT_SAME);
    }

    signUpMutate({ email, password, nickname });
  };

  return (
    <Modal title="회원가입" onClose={() => setOpenSignUpModal(false)}>
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
        <input
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          data-testid="passwordCheckInput"
          placeholder="비밀번호확인"
        />
        <input
          value={nickname}
          onChange={onChangeNickname}
          data-testid="nicknameInput"
          placeholder="닉네임"
        />
        <button>회원가입</button>
      </form>
      <SocialLoginArea />
    </Modal>
  );
};

export default SignUpModal;
