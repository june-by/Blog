import useGotoPage from "Hooks/useGotoPage";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length: number | null;
}

const CategoryRow = ({ category, length }: Props) => {
  const gotoPage = useGotoPage();

  return (
    <div
      data-testid="CategoryRow"
      key={category}
      onClick={gotoPage(`/category/${category}`)}
      className={styles.CategoryItem}
    >
      <div className={styles.text}>{category}</div>
      {length !== null && <div className={styles.count}>{length}</div>}
    </div>
  );
};

export default CategoryRow;
