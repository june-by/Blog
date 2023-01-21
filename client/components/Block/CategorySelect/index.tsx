import React from "react";
import CategoryChip from "components/Atom/CategoryChip";
import styles from "./styles.module.scss";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryChipSkeleton from "components/Atom/CategoryChip/Skeleton";
import Category from "constants/category";

const CategorySelect = () => {
  const { data, isLoading } = useGetAllCateogryLength();

  return (
    <nav className={styles.CategorySelect}>
      {!isLoading ? (
        <>
          {Category.map((category, idx) => {
            return (
              <CategoryChip key={idx} category={category} length={data?.find((v) => v.category === category)?.count} />
            );
          })}
        </>
      ) : (
        <>
          {Category.map((cateogry) => {
            return <CategoryChipSkeleton key={cateogry} />;
          })}
        </>
      )}
    </nav>
  );
};

export default CategorySelect;
