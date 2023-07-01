import { useRouter } from "next/router";
import React, { useRef } from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length?: number | null;
}

const CategoryChip = ({ category, length }: Props) => {
  const { push, query } = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);

  const onClickBtn = (category: string) => () => {
    push({
      pathname: `/`,
      query: { category },
    });
  };

  const currentCategory = query.category;

  const isCurrentSelectedCategory = currentCategory === category;

  return (
    <button
      className={styles.CategoryChip}
      onClick={onClickBtn(category)}
      style={{ background: isCurrentSelectedCategory ? "#6185e5" : "" }}
    >
      <span>{category}</span>
      {length && <div className={styles.CategoryLength}>{length ? length : 0}</div>}
    </button>
  );
};

export default React.memo(CategoryChip);
