import React from "react";
import styles from "./styles.module.scss";
import { CategoryType } from "constants/category";

interface Props {
  category: CategoryType;
  length?: number | null;
}

const CategoryButton = ({ category, length }: Props) => {
  return (
    <div className={styles.CategoryButton}>
      <span className={styles.content}>{category}</span>
      <span className={styles.length}>{length}</span>
    </div>
  );
};

export default CategoryButton;
