import React from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  onClickBtn: (category: string) => void;
  length: number | undefined;
}

const CategoryChip = ({ category, onClickBtn, length }: Props) => {
  return (
    <button className={styles.CategoryChip} onClick={() => onClickBtn(category)}>
      <span>{category}</span>
      <div className={styles.CategoryLength}>{length ? length : 0}</div>
    </button>
  );
};

export default CategoryChip;
