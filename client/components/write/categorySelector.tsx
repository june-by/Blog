import { Category } from "constants/category";
import { useWriteContext } from "context/writeContext";
import React from "react";

interface Props {
  catagoryCandidate?: string[] | typeof Category;
}

const CategorySelector = ({ catagoryCandidate = Category }: Props) => {
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
