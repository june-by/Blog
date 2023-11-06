import React from "react";
import styles from "./styles.module.scss";
import { CategoryType } from "@constants";
import classnames from "classnames";
import Link from "next/link";

interface Props {
  category: CategoryType;
  isCurrentSelectedCategory: Boolean;
  length?: number | null;
}

const CategoryButton = ({
  category,
  length,
  isCurrentSelectedCategory,
}: Props) => {
  return (
    <Link
      className={classnames(styles.CategoryButton, {
        [styles.Selected]: isCurrentSelectedCategory,
      })}
      href={`/?category=${category}`}
    >
      <span className={styles.content}>{category}</span>
      <span className={styles.length}>{length}</span>
    </Link>
  );
};

export default CategoryButton;
