import React from "react";
import styles from "./styles.module.scss";

const SeriesPageLayout = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.SeriesPageLayout}>{children}</section>;
};

export default SeriesPageLayout;
