import React from "react";
import { useGetAllCateogryLength } from "Hooks/Post";
import { Category } from "utils/variable";
import CategoryRow from "./CategoryRow";

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
              key={category}
            />
          ))}
        </>
      )}
    </>
  );
};

export default MobileCategoryList;
