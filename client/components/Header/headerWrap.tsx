import React from "react";
import LoginModal from "components/_Modal/LoginModal";
import SignUpModal from "components/_Modal/SignUpModal";
import Header from "./header";

const HeaderWrap = () => {
  return (
    <>
      <Header />
      <LoginModal />
      <SignUpModal />
    </>
  );
};

export default HeaderWrap;
