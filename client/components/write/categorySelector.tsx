import { Category } from "constants/category";
import { useWriteContext } from "context/writeContext";
import React from "react";

const CategorySelector = () => {
  const {
    handleChangeCategory,
    writeFormData: { category },
  } = useWriteContext();
  return (
    <select name="category" onChange={handleChangeCategory} value={category}>
      <>
        {Category.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </>
    </select>
  );
};

export default CategorySelector;
