import ModalView from "@components/shared/ModalView";
import SwitchCase from "@components/shared/SwitchCase";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import SocialLoginArea from "./SocialLoginArea";

interface Props {
  type: "LOGIN" | "SIGN_UP";
  onExit: (time: number) => void;
}

const AuthModal = ({ type, onExit }: Props) => {
  const [mode, setMode] = useState(type);
  const [isClose, setIsClose] = useState(false);

  const closeWithAnimation = () => {
    setIsClose(true);
    onExit(500);
  };
  return (
    <ModalView
      title={mode === "LOGIN" ? "로그인" : "회원가입"}
      onClose={closeWithAnimation}
      isClose={isClose}
    >
      <SwitchCase
        value={mode}
        caseBy={{
          LOGIN: (
            <LoginForm
              onClose={closeWithAnimation}
              openSignUpModal={() => setMode("SIGN_UP")}
            />
          ),
          SIGN_UP: <SignUpForm onClose={closeWithAnimation} />,
        }}
      />
      <SocialLoginArea />
    </ModalView>
  );
};

export default AuthModal;
