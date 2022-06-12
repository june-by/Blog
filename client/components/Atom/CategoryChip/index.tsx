import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length?: number;
  mode?: string;
}

const CategoryChip = ({ category, length, mode }: Props) => {
  const { push } = useRouter();
  const { theme } = useContext(ThemeContext);
  const onClickBtn = useCallback(
    (category: string) => {
      push({
        pathname: "/filter",
        query: { category: category },
      });
    },
    [push]
  );

  return (
    <button className={`${styles.CategoryChip} ${styles[theme]}`} onClick={() => onClickBtn(category)}>
      <span>{category}</span>
      {mode !== "post" && <div className={`${styles.CategoryLength}`}>{length ? length : 0}</div>}
    </button>
  );
};

export default CategoryChip;
