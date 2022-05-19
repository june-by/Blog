import React from "react";
import CategoryPosts from "../../components/Block/CategoryPage/CategoryPosts";
import CategorySelect from "../../components/Block/CategorySelect";
import styles from "./styles.module.scss";

const Category = () => {
  return (
    <div className={styles.CategoryWrapper}>
      <CategorySelect />
      <CategoryPosts />
    </div>
  );
};

export default Category;
