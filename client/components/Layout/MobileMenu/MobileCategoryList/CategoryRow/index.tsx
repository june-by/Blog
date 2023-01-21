import useGotoPage from "Hooks/useGotoPage";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length: number;
}

const CategoryRow = ({ category, length }: Props) => {
  const gotoPage = useGotoPage();

  return (
    <div key={category} onClick={gotoPage(`/category/${category}`)} className={styles.CategoryItem}>
      <div className={styles.text}>{category}</div>
      <div className={styles.count}>{length}</div>
    </div>
  );
};

export default CategoryRow;
