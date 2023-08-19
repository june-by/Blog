import React from "react";
import { HiMenu } from "react-icons/hi";
import styles from "./styles.module.scss";
const MobileMenuToggleButton = () => {
  return (
    <button className={styles.MobileMenuToggleButton}>
      <HiMenu />
    </button>
  );
};

export default MobileMenuToggleButton;
