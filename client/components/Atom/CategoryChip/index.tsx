import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";
import useChangeColor from "./useChangeColor";

interface Props {
  category: string;
  length?: number;
  mode?: string;
}

const CategoryChip = ({ category, length, mode }: Props) => {
  const { push } = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { theme } = useContext(ThemeContext);

  const onClickBtn = useCallback(
    (category: string) => {
      push({
        pathname: "/filter",
        query: { category: category, page: 1 },
      });
    },
    [push]
  );

  useChangeColor({ category, btnRef });

  return (
    <button ref={btnRef} className={`${styles.CategoryChip} ${styles[theme]}`} onClick={() => onClickBtn(category)}>
      <span>{category}</span>
      {mode !== "post" && <div className={`${styles.CategoryLength}`}>{length ? length : 0}</div>}
    </button>
  );
};

export default CategoryChip;
