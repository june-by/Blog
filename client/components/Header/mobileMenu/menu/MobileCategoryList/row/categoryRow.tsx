import { useMobileMenuContext } from "context/mobileMenuContext";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length: number | null;
}

const CategoryRow = ({ category, length }: Props) => {
  const { toggleShowMobileMenu } = useMobileMenuContext();
  const { push } = useRouter();

  const gotoCategoryPage = () => {
    toggleShowMobileMenu();
    push({ pathname: "/posts", query: { category } });
  };

  return (
    <div data-testid="CategoryRow" key={category} onClick={gotoCategoryPage} className={styles.CategoryItem}>
      <div className={styles.text}>{category}</div>
      {length !== null && <div className={styles.count}>{length}</div>}
    </div>
  );
};

export default CategoryRow;
