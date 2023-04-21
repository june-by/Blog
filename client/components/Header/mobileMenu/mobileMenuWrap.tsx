import MobileMenuContainer from "context/mobileMenuContext";
import React from "react";
import Menu from "./menu";
import ToggleButton from "./toggleButton";

const MobileMenuWrap = () => {
  return (
    <MobileMenuContainer>
      <>
        <ToggleButton />
        <Menu />
      </>
    </MobileMenuContainer>
  );
};

export default MobileMenuWrap;
