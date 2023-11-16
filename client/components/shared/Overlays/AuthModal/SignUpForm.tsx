import React from "react";
import styles from "./styles.module.scss";
import { useSignUp } from "@hooks/query";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import { useForm, type SubmitHandler } from "react-hook-form";
import { UserFormDataType } from "@Types/user";
import { ErrorMsg } from "@components/shared/Form";

interface Props {
  onClose: () => void;
}

type SignUpFormType = UserFormDataType & { passwordCheck: string };

const SignUpForm = ({ onClose }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpFormType>();

  const { mutate: signUpMutate } = useSignUp({
    onSuccess: () => {
      onClose();
      toast.success(MESSAGE.SIGHUP_SUCCESS);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<SignUpFormType> = ({
    email,
    password,
    nickname,
  }) => {
    signUpMutate({ email, password, nickname });
  };

  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: MESSAGE.NEED_EMAIL,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: MESSAGE.NEED_VALID_EMAIL,
            },
          })}
          data-testid="emailInput"
          placeholder="이메일 혹은 아이디"
        />
        {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        <input
          {...register("password", { required: MESSAGE.NEED_PASSWORD })}
          data-testid="passwordInput"
          type="password"
          placeholder="비밀번호"
        />
        {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
        <input
          {...register("passwordCheck", {
            required: MESSAGE.NEED_PASSWORD_CHECK,
            validate: (passwordCheck: string) => {
              if (watch("password") != passwordCheck) {
                return MESSAGE.PASSWORD_AND_CHECK_NOT_SAME;
              }
            },
          })}
          data-testid="passwordCheckInput"
          type="password"
          placeholder="비밀번호확인"
        />
        {errors.passwordCheck && (
          <ErrorMsg>{errors.passwordCheck.message}</ErrorMsg>
        )}
        <input
          {...register("nickname", { required: MESSAGE.NEED_NICKNAME })}
          data-testid="nicknameInput"
          placeholder="닉네임"
        />
        {errors.nickname && <ErrorMsg>{errors.nickname.message}</ErrorMsg>}
        <button>회원가입</button>
      </form>
    </>
  );
};

export default SignUpForm;
