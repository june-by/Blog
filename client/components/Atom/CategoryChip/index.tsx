import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length?: number;
  mode?: string;
}

const CategoryChip = ({ category, length, mode }: Props) => {
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { theme } = useContext(ThemeContext);

  const onClickBtn = useCallback(
    (category: string) => {
      router.push({
        pathname: "/filter",
        query: { category: category, page: 1 },
      });
    },
    [router]
  );

  useEffect(() => {
    if (router.query?.category) {
      if (router.query.category === category && btnRef.current) btnRef.current.style.background = "#6185e5";
    }
  }, [router.asPath]);

  return (
    <button ref={btnRef} className={`${styles.CategoryChip} ${styles[theme]}`} onClick={() => onClickBtn(category)}>
      <span>{category}</span>
      {mode !== "post" && <div className={`${styles.CategoryLength}`}>{length ? length : 0}</div>}
    </button>
  );
};

export default CategoryChip;
