import { useSignUp } from "Hooks/User";
import Modal from "components/_hoc/Modal";
import { useHeaderContext } from "context/headerContext";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import SignUpForm from "./signUpForm";
import MESSAGE from "constants/message";
import { ErrorMessage } from "Types/shared";

const SignUpModalContainer = () => {
  const { closeSignUp, isSignUpModalOpen } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const { mutate: signUpMutate } = useSignUp({
    onSuccess: () => {
      closeSignUp();
      toast.success(MESSAGE.SIGHUP_SUCCESS);
    },
    onError: (error: ErrorMessage) => {
      toast.error(error.messsage);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current || !passwordCheckRef.current || !nicknameRef.current) return;
    if (passwordRef.current.value !== passwordCheckRef.current.value)
      return toast.error(MESSAGE.PASSWORD_AND_CHECK_NOT_SAME);

    const reqData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      nickname: nicknameRef.current.value,
    };

    signUpMutate(reqData);
  };

  return (
    <Modal closeModal={closeSignUp} isOpen={isSignUpModalOpen}>
      <SignUpForm
        onSubmit={onSubmit}
        emailRef={emailRef}
        passwordRef={passwordRef}
        passwordCheckRef={passwordCheckRef}
        nicknameRef={nicknameRef}
      />
    </Modal>
  );
};

export default SignUpModalContainer;