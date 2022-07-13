import React, { useContext } from "react";
import { ThemeContext } from "../../../../utils/ThemeContext";
import HeaderLeft from "../HeaderLeft";
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
