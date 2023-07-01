import { useRouter } from "next/router";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

interface Props {
  category: string;
  length?: number | null;
}

const CategoryChip = ({ category, length }: Props) => {
  const { push, query } = useRouter();

  const currentCategory = query.category;

  const isCurrentSelectedCategory = currentCategory === category;

  return (
    <Link
      className={styles.CategoryChip}
      data-testid="categoryChip"
      href={`/?category=${category}`}
      style={{ background: isCurrentSelectedCategory ? "#6185e5" : "" }}
    >
      <span>{category}</span>
      {length && <div className={styles.CategoryLength}>{length ? length : 0}</div>}
    </Link>
  );
};

export default React.memo(CategoryChip);
