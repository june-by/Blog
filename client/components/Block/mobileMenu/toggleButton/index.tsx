import React, { useContext } from "react";
import MenuIcon from "components/Icon/menu";
import styles from "./styles.module.scss";
import { MobileMenuContext } from "..";

const ToggleButton = () => {
  const { toggleShowMobileMenu } = useContext(MobileMenuContext);
  return (
    <button className={styles.toggleButton} onClick={toggleShowMobileMenu}>
      <MenuIcon />
    </button>
  );
};

export default ToggleButton;
