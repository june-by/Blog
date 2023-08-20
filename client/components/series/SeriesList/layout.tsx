import React from "react";
import styles from "./styles.module.scss";

const SeriesListLayout = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.SeriesListLayout}>{children}</div>;
};

export default SeriesListLayout;
