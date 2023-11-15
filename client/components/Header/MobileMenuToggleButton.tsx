import React from "react";
import { HiMenu } from "react-icons/hi";
import styles from "./styles.module.scss";
import { useModals } from "@hooks";
import { MODALS } from "@components/shared/Modals/Modals";

const MobileMenuToggleButton = () => {
  const { openModal } = useModals();

  const handleClickMobileMenuOpenButton = () => {
    openModal(MODALS.MOBILE_MENU_MDAPL);
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
