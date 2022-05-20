import { useRouter } from "next/router";
import React, { useCallback } from "react";
import useGotoPage from "../../../../Hooks/useGotoPage";
import { dateForm } from "../../../../utils/dateForm";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  category: string;
  createdAt: Date;
}

const PostTop = ({ title, createdAt, category }: Props) => {
  const gotoPage = useGotoPage();
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);
  return (
    <div className={styles.PostTop}>
      <button onClick={goBack} className={styles.goBackBtn}>
        <img src="/back_icon.png" alt="뒤로가기" />
        <span>뒤로가기</span>
      </button>
      <h1 className={styles.PostTitle}>{title}</h1>
      <div className={styles.AdditionalInfo}>
        <span>{dateForm(createdAt)}</span>
        <button onClick={gotoPage(`/category/${category}`)}>{category}</button>
      </div>
    </div>
  );
};

export default PostTop;
