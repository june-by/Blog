import React, { type PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const SeriesListLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.SeriesListLayout}>{children}</div>;
};

export default SeriesListLayout;
