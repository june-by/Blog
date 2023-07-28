import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const NotFoundPageIndicator = () => {
  const router = useRouter();
  return (
    <div className={styles.NotFoundIndicator}>
      <h2>존재하지 않는 페이지입니다.</h2>
      <button onClick={() => router.replace("/")}>메인페이지로 이동</button>
    </div>
  );
};

export default NotFoundPageIndicator;
