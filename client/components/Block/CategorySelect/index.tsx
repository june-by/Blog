import React from "react";
import CategoryChip from "../../atom/CategoryChip";
import styles from "./styles.module.scss";
import { Category } from "../../../utils/category";
import { useGetAllCateogryLength } from "../../../hooks/Post";
import CategoryChipSkeleton from "../../atom/CategoryChip/Skeleton";

const CategorySelect = () => {
  const { data, isLoading } = useGetAllCateogryLength();

  return (
    <div className={styles.CategorySelect}>
      {!isLoading ? (
        <>
          {Category.map((category, idx) => {
            return <CategoryChip key={idx} category={category} length={data?.find((v) => v.category === category)?.count} />;
          })}
        </>
      ) : (
        <>
          {Category.map((cateogry) => {
            return <CategoryChipSkeleton key={cateogry} />;
          })}
        </>
      )}
    </div>
  );
};

export default CategorySelect;
