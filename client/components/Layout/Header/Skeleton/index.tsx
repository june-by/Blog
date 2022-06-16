import React from "react";
import styles from "../styles.module.scss";

const HeaderSkeleton = ({ theme }: { theme: string }) => {
  return <div className={`${styles.HeaderRoot} ${styles[theme]}`}></div>;
};

export default HeaderSkeleton;
