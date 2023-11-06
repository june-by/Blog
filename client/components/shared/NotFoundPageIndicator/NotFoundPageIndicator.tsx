"use client";

import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const NotFoundPageIndicator = ({ text = "존재하지 않는 페이지입니다." }) => {
  const router = useRouter();
  return (
    <div className={styles.NotFoundIndicator}>
      <h2>{text}</h2>
      <button onClick={() => router.replace("/")}>메인페이지로 이동</button>
    </div>
  );
};

export default NotFoundPageIndicator;
