import { useLogin } from "@hooks/query";
import { useHeaderContext } from "@contexts/headerContext";
import React, { useRef, type FormEvent } from "react";
import { toast } from "react-toastify";
import LoginForm from "./loginForm";
import { MESSAGE } from "@constants";
import DefaultModal from "@components/shared/DefaultModal";

const LoginModalContainer = () => {
  const { closeLogin, isLoginModalOpen } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: loginMutate } = useLogin({
    onSuccess: () => {
      toast.success(MESSAGE.LOGIN_SUCCESS);
      closeLogin();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) {
      return;
    }
    if (emailRef.current.value === "") {
      return toast.error(MESSAGE.NEED_EMAIL);
    }
    if (passwordRef.current.value === "") {
      return toast.error(MESSAGE.NEED_PASSWORD);
    }

    const reqData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginMutate(reqData);
  };

  return (
    <DefaultModal closeModal={closeLogin} isOpen={isLoginModalOpen}>
      <LoginForm
        onSubmit={submit}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </DefaultModal>
  );
};

export default LoginModalContainer;
