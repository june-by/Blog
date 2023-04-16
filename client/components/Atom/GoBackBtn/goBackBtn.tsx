import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";
import BackIcon from "components/Icon/back";

const GoBackBtn = () => {
  const router = useRouter();

  return (
    <button data-testid="goBackBtn" onClick={router.back} className={styles.goBackBtn}>
      <BackIcon />
      <span>뒤로가기</span>
    </button>
  );
};

export default GoBackBtn;
