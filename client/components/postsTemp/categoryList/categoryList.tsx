import React from "react";
import CategoryChip from "components/shared/categoryChip";
import styles from "./styles.module.scss";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryChipSkeleton from "components/shared/categoryChip/Skeleton";
import { Category } from "constants/category";
import LoadingOrNot from "components/_hoc/LoadingOrNot";
import CategoryButton from "components/shared/CategoryButton/CategoryButton";

const CategoryListSkeleton = () => {
  return (
    <nav className={styles.CategorySelect}>
      {Category.map((cateogry) => {
        return <CategoryChipSkeleton key={cateogry} />;
      })}
    </nav>
  );
};

const CategoryList = () => {
  const { data, isLoading } = useGetAllCateogryLength();

  return (
    <aside className={styles.CategoryList}>
      <h2>📘 Categories</h2>
      <LoadingOrNot isLoading={isLoading} onLoading={null}>
        <nav className={styles.CategoryButtonWrap}>
          {Category.map((category) => {
            return (
              <CategoryButton
                key={category}
                category={category}
                length={
                  data?.find((v) => v.category === category)?.count || null
                }
              />
            );
          })}
        </nav>
      </LoadingOrNot>
    </aside>
  );
};

export default CategoryList;
