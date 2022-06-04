import React, { useCallback } from "react";
import CategoryChip from "../../Atom/CategoryChip";
import styles from "./styles.module.scss";
import { Category } from "../../../utils/category";
import { useRouter } from "next/router";
import { useGetAllCateogryLength } from "../../../Hooks/Post";
import CategoryChipSkeleton from "../../Atom/CategoryChip/Skeleton";

const CategorySelect = () => {
  const router = useRouter();
  const { data, isLoading } = useGetAllCateogryLength();

  const onClickCategory = useCallback(
    (category: string) => {
      router.push({
        pathname: "/filter",
        query: { category: category },
      });
    },
    [router]
  );

  return (
    <div className={styles.CategorySelect}>
      {!isLoading ? (
        <>
          {Category.map((category, idx) => {
            return <CategoryChip key={idx} category={category} onClickBtn={onClickCategory} length={data?.find((v) => v.category === category)?.count} />;
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
