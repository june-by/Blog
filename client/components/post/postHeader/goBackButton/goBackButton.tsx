import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";
import BackIcon from "components/Icon/back";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button data-testid="GoBackButton" onClick={router.back} className={styles.GoBackButton}>
      <BackIcon />
      <span>뒤로가기</span>
    </button>
  );
};

export default GoBackButton;
