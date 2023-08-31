import { Category } from "constants/category";
import { useWriteContext } from "context/writeContext";
import React from "react";

interface Props<T> {
  catagoryCandidate?: T[] | typeof Category;
}

const CategorySelector = <T extends string>({
  catagoryCandidate = Category,
}: Props<T>) => {
  const {
    handleChangeCategory,
    writeFormData: { category },
  } = useWriteContext();
  return (
    <select name="category" onChange={handleChangeCategory} value={category}>
      <>
        {catagoryCandidate.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </>
    </select>
  );
};

export default CategorySelector;
