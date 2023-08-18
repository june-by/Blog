import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.PageLayout}>{children}</section>;
};

export default PageLayout;
