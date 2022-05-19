import React from "react";
import styles from "./styles.module.scss";

const CategoryChip = ({ category, onClickBtn }: { category: string; onClickBtn: (category: string) => void }) => {
  return (
    <button className={styles.CategoryChip} onClick={() => onClickBtn(category)}>
      {category}
    </button>
  );
};

export default CategoryChip;
