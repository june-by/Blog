import React from "react";
import LoginModal from "components/_Modal/LoginModal";
import SignUpModal from "components/_Modal/SignUpModal";
import SearchModal from "components/_Modal/SearchModal";
import FloatingHeader from "./FloatingHeader";
import Header from "./header";

const HeaderWrap = () => {
  return (
    <>
      <Header />
      {/* <FloatingHeader /> */}
      <LoginModal />
      <SignUpModal />
      <SearchModal />
    </>
  );
};

export default HeaderWrap;
