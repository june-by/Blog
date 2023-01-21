import React, { useContext } from "react";
import { ThemeContext } from "components/_hoc/themeContext";
import HeaderLeft from "components/Layout/Header/HeaderLeft";
import styles from "../styles.module.scss";

const HeaderSkeleton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.HeaderRoot} ${styles[theme]}`}>
      <HeaderLeft />
    </div>
  );
};

export default HeaderSkeleton;
