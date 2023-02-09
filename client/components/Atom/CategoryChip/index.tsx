import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import styles from "./styles.module.scss";
import useChangeColor from "./useChangeColor";

interface Props {
  category: string;
  length?: number | null;
  mode?: string;
}

const CategoryChip = ({ category, length, mode }: Props) => {
  const { push } = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);

  const onClickBtn = useCallback(
    (category: string) => {
      push({
        pathname: `/filter`,
        query: { category: category },
      });
    },
    [push]
  );

  useChangeColor({ category, btnRef });

  return (
    <button ref={btnRef} className={styles.CategoryChip} onClick={() => onClickBtn(category)}>
      <span>{category}</span>
      {mode !== "post" && length !== null && <div className={styles.CategoryLength}>{length ? length : 0}</div>}
    </button>
  );
};

export default CategoryChip;
