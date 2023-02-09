import { MobileMenuContext } from "components/Block/mobileMenu";
import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import styles from "./styles.module.scss";

interface Props {
  category: string;
  length: number | null;
}

const CategoryRow = ({ category, length }: Props) => {
  const { toggleShowMobileMenu } = useContext(MobileMenuContext);
  const { push } = useRouter();

  const gotoCategoryPage = useCallback(() => {
    toggleShowMobileMenu();
    push({ pathname: "/filter", query: { category: category } });
  }, [category, push, toggleShowMobileMenu]);

  return (
    <div data-testid="CategoryRow" key={category} onClick={gotoCategoryPage} className={styles.CategoryItem}>
      <div className={styles.text}>{category}</div>
      {length !== null && <div className={styles.count}>{length}</div>}
    </div>
  );
};

export default CategoryRow;
