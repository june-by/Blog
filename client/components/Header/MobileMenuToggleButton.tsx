import React from "react";
import { HiMenu } from "react-icons/hi";
import styles from "./styles.module.scss";
import useToggle from "Hooks/useToggle";
import MobileMenu from "./MobileMenu";
import { useBooleanState } from "Hooks/useBooleanState";
const MobileMenuToggleButton = () => {
  const [isOpen, open, close, toggleState] = useBooleanState(false);

  return (
    <>
      <button className={styles.MobileMenuToggleButton} onClick={toggleState}>
        <HiMenu />
      </button>
      <MobileMenu open={isOpen} handleClose={close} />
    </>
  );
};

export default MobileMenuToggleButton;
