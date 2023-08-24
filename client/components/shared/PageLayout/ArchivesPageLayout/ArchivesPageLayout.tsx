import React from "react";
import styles from "./styles.module.scss";

const ArchivesPageLayout = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.ArchivesPageLayout}>{children}</section>;
};

export default ArchivesPageLayout;
