import React from "react";
import { Category } from "utils/variable";

interface Props {
  categoryInfo: string;
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelectInWrite = ({ categoryInfo, onChangeCategory }: Props) => {
  return (
    <select
      data-testid="categorySelectInWrite"
      value={categoryInfo}
      onChange={onChangeCategory}
    >
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
