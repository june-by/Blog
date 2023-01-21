import BackIcon from "components/Icon/back";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "components/_hoc/themeContext";
import styles from "./styles.module.scss";

const GoBackBtn = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <button data-testid="goBackBtn" onClick={goBack} className={`${styles.goBackBtn} ${styles[theme]}`}>
      <BackIcon fill={theme === "light" ? "black" : "white"} />
      <span>뒤로가기</span>
    </button>
  );
};

export default GoBackBtn;
