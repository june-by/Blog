import React, { useCallback } from "react";
import CategoryChip from "../../Atom/CategoryChip";
import styles from "./styles.module.scss";
import { Category } from "../../../utils/category";
import { useRouter } from "next/router";

const CategorySelect = () => {
  const router = useRouter();

  const onClickCategory = useCallback((category: string) => {
    router.push(`/category/${category}`);
  }, []);

  return (
    <div className={styles.CategorySelect}>
      {Category.map((category, idx) => {
        return <CategoryChip key={idx} category={category} onClickBtn={onClickCategory} />;
      })}
    </div>
  );
};

export default CategorySelect;
