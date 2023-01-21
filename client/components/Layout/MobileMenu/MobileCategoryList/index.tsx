import React from "react";
import { useGetAllCateogryLength } from "Hooks/Post";
import CategoryRow from "./CategoryRow";
import Category from "constants/category";

const MobileCategoryList = () => {
  const { data, isLoading } = useGetAllCateogryLength();

  return (
    <>
      {!isLoading && (
        <>
          {Category.map((category) => (
            <CategoryRow
              category={category}
              length={data?.find((v) => v.category === category)?.count || 0}
              key={`mobileCategory${category}`}
            />
          ))}
        </>
      )}
    </>
  );
};

export default MobileCategoryList;
