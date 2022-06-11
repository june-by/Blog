import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length?: number;
  mode?: string;
}

const CategoryChip = ({ category, length, mode }: Props) => {
  const { push } = useRouter();

  const onClickBtn = useCallback(
    (category: string) => {
      push({
        pathname: "/filter",
        query: { category: category },
      });
    },
    [push]
  );

  return (
    <button className={styles.CategoryChip} onClick={() => onClickBtn(category)}>
      <span>{category}</span>
      {mode !== "post" && <div className={styles.CategoryLength}>{length ? length : 0}</div>}
    </button>
  );
};

export default CategoryChip;
