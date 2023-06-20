import { useLogin } from "Hooks/User";
import Modal from "components/_hoc/Modal";
import { useHeaderContext } from "context/headerContext";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import LoginForm from "./loginForm";

const LoginModalContainer = () => {
  const { closeLogin, isLoginModalOpen } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: loginMutate } = useLogin(closeLogin);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    if (emailRef.current.value === "") return toast.warn("* 아이디를 입력해주세요.");
    if (passwordRef.current.value === "") return toast.warn("* 비밀번호를 입력해주세요.");

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
