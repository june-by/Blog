import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { CategoryType } from "constants/category";

interface Props {
  category: CategoryType;
  length?: number | null;
}

const CategoryChip = ({ category, length }: Props) => {
  const categoryChipRef = useRef<HTMLAnchorElement | null>(null);
  const { query } = useRouter();

  const currentCategory = query.category;

  const isCurrentSelectedCategory = currentCategory === category;

  useEffect(() => {
    if (!isCurrentSelectedCategory) return;
    categoryChipRef.current?.scrollIntoView({
      block: "nearest",
      inline: "center",
    });
  }, [isCurrentSelectedCategory]);

  return (
    <Link
      ref={categoryChipRef}
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
