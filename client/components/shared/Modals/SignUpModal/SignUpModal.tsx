import React, { FormEventHandler } from "react";
import styles from "./styles.module.scss";
import { useInput } from "@hooks";
import { StateUpdater } from "@Types/utils";
import { SocialLoginArea } from "@components/shared/SocialLoginArea";
import { useSignUp } from "@hooks/query";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import ModalView from "@components/shared/ModalView";

interface Props {
  onClose: () => void;
}

const SignUpModal = ({ onClose }: Props) => {
  const [email, , onChangeEmail] = useInput("");
  const [password, , onChangePassword] = useInput("");
  const [passwordCheck, , onChangePasswordCheck] = useInput("");
  const [nickname, , onChangeNickname] = useInput("");

  const { mutate: signUpMutate } = useSignUp({
    onSuccess: () => {
      onClose();
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
    <ModalView title="회원가입" onClose={onClose}>
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
    </ModalView>
  );
};

export default SignUpModal;
