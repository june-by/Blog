import { useSignUp } from "Hooks/User";
import { useHeaderContext } from "context/headerContext";
import React, { useRef, type FormEvent } from "react";
import { toast } from "react-toastify";
import SignUpForm from "./signUpForm";
import MESSAGE from "constants/message";
import { ErrorMessage } from "Types/shared";
import DefaultModal from "components/shared/DefaultModal";

const SignUpModalContainer = () => {
  const { closeSignUp, isSignUpModalOpen } = useHeaderContext();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordCheckRef = useRef<HTMLInputElement | null>(null);
  const nicknameRef = useRef<HTMLInputElement | null>(null);

  const { mutate: signUpMutate } = useSignUp({
    onSuccess: () => {
      closeSignUp();
      toast.success(MESSAGE.SIGHUP_SUCCESS);
    },
    onError: (error: ErrorMessage) => {
      toast.error(error.messsage);
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !passwordCheckRef.current ||
      !nicknameRef.current
    )
      return;
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
    <DefaultModal closeModal={closeSignUp} isOpen={isSignUpModalOpen}>
      <SignUpForm
        onSubmit={onSubmit}
        emailRef={emailRef}
        passwordRef={passwordRef}
        passwordCheckRef={passwordCheckRef}
        nicknameRef={nicknameRef}
      />
    </DefaultModal>
  );
};

export default SignUpModalContainer;
