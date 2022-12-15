import React from "react";
import CategoryChip from "components/Atom/CategoryChip";
import styles from "./styles.module.scss";
import { Category } from "utils/variable";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryChipSkeleton from "components/Atom/CategoryChip/Skeleton";

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
