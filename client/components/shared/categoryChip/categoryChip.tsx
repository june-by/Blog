import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { CategoryType } from "constants/category";

interface Props {
  category: CategoryType;
  length?: number | null;
}

const CategoryChip = ({ category, length }: Props) => {
  const { query } = useRouter();

  const currentCategory = query.category;

  const isCurrentSelectedCategory = currentCategory === category;

  return (
    <Link
      className={
        isCurrentSelectedCategory
          ? `${styles.CategoryChip} ${styles.Selected}`
          : `${styles.CategoryChip}`
      }
      data-testid="categoryChip"
      href={`/?category=${category}`}
    >
      <span>{category}</span>
      {length && (
        <div className={styles.CategoryLength}>{length ? length : 0}</div>
      )}
    </Link>
  );
};

export default React.memo(CategoryChip);
