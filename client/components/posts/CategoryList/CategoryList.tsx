import React from "react";
import styles from "./styles.module.scss";
import { Category } from "@constants";
import CategoryButton from "@components/shared/CategoryButton";
import FontAppliedElement from "@components/shared/FontAppliedElement";
import { getAllCategoryLengthAPI } from "@services/post";

const CategoryList = async () => {
  const data = await getAllCategoryLength();

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

async function getAllCategoryLength() {
  try {
    const data = await getAllCategoryLengthAPI();
    return data;
  } catch (err) {
    return null;
  }
}

export default CategoryList;
