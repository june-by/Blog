import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import BackIcon from "components/Icon/back";

const GoBackBtn = () => {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <button data-testid="goBackBtn" onClick={goBack} className={styles.goBackBtn}>
      <BackIcon />
      <span>뒤로가기</span>
    </button>
  );
};

export default GoBackBtn;
