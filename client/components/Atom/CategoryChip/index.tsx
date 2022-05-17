import React from "react";
import styles from "./styles.module.scss";

const CategoryChip = ({ category }: { category: string }) => {
  return <div className={styles.CategoryChip}>{category}</div>;
};

export default CategoryChip;
