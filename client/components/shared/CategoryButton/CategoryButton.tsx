import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { CategoryType } from "constants/category";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  category: CategoryType;
  length?: number | null;
}

const CategoryButton = ({ category, length }: Props) => {
  const categoryButtonRef = useRef<HTMLAnchorElement | null>(null);
  const { query } = useRouter();

  const currentCategory = query.category;

  const isCurrentSelectedCategory = currentCategory === category;

  useEffect(() => {
    if (!isCurrentSelectedCategory) return;
    categoryButtonRef.current?.scrollIntoView({
      block: "nearest",
      inline: "center",
    });
  }, [isCurrentSelectedCategory]);

  return (
    <Link
      ref={categoryButtonRef}
      className={
        isCurrentSelectedCategory
          ? `${styles.CategoryButton} ${styles.Selected}`
          : `${styles.CategoryButton}`
      }
      href={`/?category=${category}`}
    >
      <span className={styles.content}>{category}</span>
      <span className={styles.length}>{length}</span>
    </Link>
  );
};

export default CategoryButton;
