import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length: number;
}

const CategoryRow = ({ category, length }: Props) => {
  const { push } = useRouter();

  const onClickMenu = useCallback(
    (category: string) => () => {
      push({
        pathname: "/filter",
        query: { category: category, page: 1 },
      });
    },
    [push]
  );

  return (
    <div key={category} onClick={onClickMenu(category)} className={styles.CategoryItem}>
      <div className={styles.text}>{category}</div>
      <div className={styles.count}>{length}</div>
    </div>
  );
};

export default CategoryRow;
