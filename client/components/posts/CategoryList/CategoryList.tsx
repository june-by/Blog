import React from "react";
import styles from "./styles.module.scss";
import { useGetAllCateogryLength } from "Hooks/Post";
import { Category } from "@constants";
import CategoryButton from "components/shared/CategoryButton/CategoryButton";
import FontAppliedElement from "components/shared/FontAppliedElement";

const CategoryList = () => {
  const { data } = useGetAllCateogryLength();

  return (
    <aside className={styles.CategoryList}>
      <FontAppliedElement tagName="h2">📘 Categories</FontAppliedElement>
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
