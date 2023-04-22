import { Category } from "constants/category";
import { useWriteContext } from "context/writeContext";
import React from "react";

const CategorySelector = () => {
  const {
    onChangeTextData,
    writeSubmitData: { category },
  } = useWriteContext();
  return (
    <select name="category" onChange={onChangeTextData} value={category}>
      <>
        {Category.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </>
    </select>
  );
};

export default CategorySelector;
