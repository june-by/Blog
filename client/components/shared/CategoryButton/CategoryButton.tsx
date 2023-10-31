import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { CategoryType } from "@constants";
import classnames from "classnames";
import { useScrollIntoElement } from "@hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  category: CategoryType;
  length?: number | null;
}

const CategoryButton = ({ category, length }: Props) => {
  const categoryButtonRef = useRef<HTMLAnchorElement | null>(null);
  const searchParams = useSearchParams();

  const currentCategory = searchParams?.get("category");

  const isCurrentSelectedCategory = currentCategory === category;

  useScrollIntoElement({
    when: isCurrentSelectedCategory,
    element: categoryButtonRef.current,
    scrollOptions: {
      block: "nearest",
      inline: "center",
    },
  });

  return (
    <Link
      ref={categoryButtonRef}
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
