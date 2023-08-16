import React from "react";
import styles from "./styles.module.scss";

const PageLayout = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.PageLayout}>{children}</section>;
};

export default PageLayout;
