import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length: number | null;
}

const CategoryRow = ({ category, length }: Props) => {
  const { push } = useRouter();

  return (
    <div
      data-testid="CategoryRow"
      key={category}
      onClick={() => push({ pathname: "/filter", query: { category: category } })}
      className={styles.CategoryItem}
    >
      <div className={styles.text}>{category}</div>
      {length !== null && <div className={styles.count}>{length}</div>}
    </div>
  );
};

export default CategoryRow;
