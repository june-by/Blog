import React from "react";
import CategoryChip from "components/shared/categoryChip";
import styles from "./styles.module.scss";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryChipSkeleton from "components/shared/categoryChip/Skeleton";
import { Category } from "constants/category";
import LoadingOrNot from "components/_hoc/LoadingOrNot";

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
    <LoadingOrNot isLoading={isLoading} onLoading={<CategoryListSkeleton />}>
      <nav className={styles.CategorySelect}>
        {Category.map((category) => {
          return (
            <CategoryChip
              key={category}
              category={category}
              length={data?.find((v) => v.category === category)?.count || null}
            />
          );
        })}
      </nav>
    </LoadingOrNot>
  );
};

export default CategoryList;
