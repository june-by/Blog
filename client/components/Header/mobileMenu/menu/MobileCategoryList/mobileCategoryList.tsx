import React from "react";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryRow from "./row";
import { Category } from "constants/category";

const MobileCategoryList = () => {
  const { data, isLoading } = useGetAllCateogryLength();

  if (isLoading) return <></>;

  return (
    <>
      {Category.map((category) => (
        <CategoryRow
          category={category}
          length={data?.find((v) => v.category === category)?.count || null}
          key={`mobileCategory${category}`}
        />
      ))}
    </>
  );
};

export default MobileCategoryList;
