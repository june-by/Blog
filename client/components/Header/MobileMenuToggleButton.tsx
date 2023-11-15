import React from "react";
import { HiMenu } from "react-icons/hi";
import styles from "./styles.module.scss";
import { useOverlay } from "@hooks";
import { OVERLAYS } from "@components/shared/Overlays/Overlays";

const MobileMenuToggleButton = () => {
  const { openOverlay } = useOverlay();

  const handleClickMobileMenuOpenButton = () => {
    openOverlay(OVERLAYS.MOBILE_MENU);
  };

  return (
    <button
      className={styles.MobileMenuToggleButton}
      onClick={handleClickMobileMenuOpenButton}
    >
      <HiMenu />
    </button>
  );
};

export default MobileMenuToggleButton;
