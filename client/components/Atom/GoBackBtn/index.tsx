import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

const GoBackBtn = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <button data-testid="goBackBtn" onClick={goBack} className={`${styles.goBackBtn} ${styles[theme]}`}>
      <Image src="/back_icon.png" alt="뒤로가기" width={20} height={17} />
      <span>뒤로가기</span>
    </button>
  );
};

export default GoBackBtn;
