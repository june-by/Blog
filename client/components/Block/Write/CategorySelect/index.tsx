import React from "react";
import { Category } from "../../../../utils/category";

interface Props {
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelectInWrite = ({ onChangeCategory }: Props) => {
  return (
    <select onChange={onChangeCategory}>
      <>
        {Category?.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </>
    </select>
  );
};

export default CategorySelectInWrite;
