import React from "react";
import CategoryChip from "../../../Atom/CategoryChip";
import styles from "./styles.module.scss";
import { Category } from "./category";

const CategorySelect = () => {
  return (
    <div className={styles.CategorySelect}>
      {Category.map((category, idx) => {
        return <CategoryChip key={idx} category={category} />;
      })}
    </div>
  );
};

export default CategorySelect;
