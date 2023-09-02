import Selector from "components/shared/Selector";
import { Category } from "constants/category";
import { useWriteContext } from "context/writeContext";
import React from "react";

interface Props<T> {
  catagoryCandidate?: T[] | typeof Category;
}

const CategorySelector = <T extends string>({
  catagoryCandidate = Category,
}: Props<T>) => {
  const { handleChangeCategory } = useWriteContext();

  const categoryOptions = catagoryCandidate.map((category) => {
    return {
      key: category,
      value: category,
      text: category,
    };
  });

  return <Selector onChange={handleChangeCategory} options={categoryOptions} />;
};

export default CategorySelector;
