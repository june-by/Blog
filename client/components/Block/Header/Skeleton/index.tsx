import React from "react";
import HeaderLeft from "components/Block/Header/HeaderLeft";
import styles from "../styles.module.scss";

const HeaderSkeleton = () => {
  return (
    <div className={styles.HeaderRoot}>
      <HeaderLeft />
    </div>
  );
};

export default HeaderSkeleton;
