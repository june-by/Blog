import React, { type FormEvent, type RefObject } from "react";

import { useHeaderContext } from "@contexts/headerContext";
import ModalView from "@components/shared/ModalView";

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
  passwordCheckRef: RefObject<HTMLInputElement>;
  nicknameRef: RefObject<HTMLInputElement>;
}

const {
  Header,
  Title,
  CloseButton,
  Form,
  Input,
  SubmitButton,
  SocialLoginArea,
} = ModalView;

const SignUpForm = ({
  onSubmit,
  emailRef,
  passwordRef,
  passwordCheckRef,
  nicknameRef,
}: Props) => {
  const { closeSignUp } = useHeaderContext();

  return (
    <ModalView>
      <Header>
        <Title title="회원가입" />
        <CloseButton handleClose={closeSignUp} data-testid="signUpCloseBtn" />
      </Header>
      <Form handleSubmit={onSubmit}>
        <Input
          data-testid="emailInput"
          ref={emailRef}
          placeholder="이메일 혹은 아이디"
        />
        <Input
          data-testid="passwordInput"
          ref={passwordRef}
          type="password"
          placeholder="비밀번호"
        />
        <Input
          data-testid="passwordCheckInput"
          ref={passwordCheckRef}
          type="password"
          placeholder="비밀번호확인"
        />
        <Input
          data-testid="nicknameInput"
          ref={nicknameRef}
          placeholder="닉네임"
        />
        <SubmitButton>회원가입</SubmitButton>
      </Form>
      <SocialLoginArea />
    </ModalView>
  );
};

export default SignUpForm;
