import { useLogin } from "Hooks/User";
import Modal from "components/_hoc/Modal";
import { useHeaderContext } from "context/headerContext";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import LoginForm from "./loginForm";
import MESSAGE from "constants/message";

const LoginModalContainer = () => {
  const { closeLogin, isLoginModalOpen } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: loginMutate } = useLogin({ onSuccess: closeLogin });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    if (emailRef.current.value === "") return toast.warn(MESSAGE.NEED_EMAIL);
    if (passwordRef.current.value === "") return toast.warn(MESSAGE.NEED_PASSWORD);

    const reqData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginMutate(reqData);
  };

  return (
    <Modal closeModal={closeLogin} isOpen={isLoginModalOpen}>
      <LoginForm onSubmit={submit} emailRef={emailRef} passwordRef={passwordRef} />
    </Modal>
  );
};

export default LoginModalContainer;
