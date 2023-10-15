import React from "react";
import { HiMenu } from "react-icons/hi";
import styles from "./styles.module.scss";
import MobileMenu from "./MobileMenu";
import { useBooleanState } from "@hooks";
const MobileMenuToggleButton = () => {
  const [isOpen, , close, toggleState] = useBooleanState(false);

  return (
    <>
      <button className={styles.MobileMenuToggleButton} onClick={toggleState}>
        <HiMenu />
      </button>
      <MobileMenu isOpen={isOpen} handleClose={close} />
    </>
  );
};

export default MobileMenuToggleButton;
