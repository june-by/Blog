import React, { useCallback } from "react";
import CategoryChip from "../../Atom/CategoryChip";
import styles from "./styles.module.scss";
import { Category } from "../../../utils/category";
import { useRouter } from "next/router";
import { useGetAllCateogryLength } from "../../../Hooks/Post";

const CategorySelect = () => {
  const router = useRouter();
  const { data } = useGetAllCateogryLength();
  console.log(data);

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
      {Category.map((category, idx) => {
        return <CategoryChip key={idx} category={category} onClickBtn={onClickCategory} />;
      })}
    </div>
  );
};

export default CategorySelect;
