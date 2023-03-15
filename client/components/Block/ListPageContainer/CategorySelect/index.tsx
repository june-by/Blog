import React from "react";
import CategoryChip from "components/Atom/CategoryChip";
import styles from "./styles.module.scss";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryChipSkeleton from "components/Atom/CategoryChip/Skeleton";
import { Category } from "constants/category";

const CategoryList = () => {
  const { data, isLoading } = useGetAllCateogryLength();

  if (isLoading)
    return (
      <>
        {Category.map((cateogry) => {
          return <CategoryChipSkeleton key={cateogry} />;
        })}
      </>
    );

  return (
    <nav className={styles.CategorySelect}>
      {Category.map((category, idx) => {
        return (
          <CategoryChip
            key={category}
            category={category}
            length={data?.find((v) => v.category === category)?.count || null}
          />
        );
      })}
    </nav>
  );
};

export default CategoryList;
