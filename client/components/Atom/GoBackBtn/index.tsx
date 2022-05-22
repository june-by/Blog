import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";

const GoBackBtn = () => {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);
  return (
    <button onClick={goBack} className={styles.goBackBtn}>
      <img src="/back_icon.png" alt="뒤로가기" />
      <span>뒤로가기</span>
    </button>
  );
};

export default GoBackBtn;
