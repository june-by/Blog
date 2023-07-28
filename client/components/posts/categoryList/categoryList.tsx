import React from "react";
import styles from "./styles.module.scss";
import { useGetAllCateogryLength } from "Hooks/Post";
import { Category } from "constants/category";
import CategoryButton from "components/shared/CategoryButton/CategoryButton";

const CategoryList = () => {
  const { data } = useGetAllCateogryLength();

  return (
    <aside className={styles.CategoryList}>
      <h2>📘 Categories</h2>
      <nav className={styles.CategoryButtonWrap}>
        {Category.map((category) => {
          return (
            <CategoryButton
              key={category}
              category={category}
              length={data?.find((v) => v.category === category)?.count || null}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default CategoryList;
