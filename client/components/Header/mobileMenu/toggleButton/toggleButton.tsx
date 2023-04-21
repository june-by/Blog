import React from "react";
import MenuIcon from "components/Icon/menu";
import styles from "./styles.module.scss";
import { useMobileMenuContext } from "context/mobileMenuContext";

const ToggleButton = () => {
  const { toggleShowMobileMenu } = useMobileMenuContext();
  return (
    <button className={styles.toggleButton} onClick={toggleShowMobileMenu}>
      <MenuIcon />
    </button>
  );
};

export default ToggleButton;
