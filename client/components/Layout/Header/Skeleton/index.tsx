import React from "react";
import HeaderLeft from "../HeaderLeft";
import styles from "../styles.module.scss";

const HeaderSkeleton = ({ theme }: { theme: string }) => {
  return (
    <div className={`${styles.HeaderRoot} ${styles[theme]}`}>
      <HeaderLeft />
    </div>
  );
};

export default HeaderSkeleton;
