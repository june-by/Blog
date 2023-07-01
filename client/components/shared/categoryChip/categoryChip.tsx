import { useRouter } from "next/router";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import useChangeCurrentCategoryColor from "./useChangeCurrentCategoryColor";

interface Props {
  category: string;
  length?: number | null;
}

const CategoryChip = ({ category, length }: Props) => {
  const { push } = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);

  const onClickBtn = (category: string) => () => {
    push({
      pathname: `/`,
      query: { category },
    });
  };

  useChangeCurrentCategoryColor({ category, btnRef });

  return (
    <button ref={btnRef} className={styles.CategoryChip} onClick={onClickBtn(category)}>
      <span>{category}</span>
      {length && <div className={styles.CategoryLength}>{length ? length : 0}</div>}
    </button>
  );
};

export default React.memo(CategoryChip);
