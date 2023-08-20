import React from "react";
import styles from "./styles.module.scss";
import PageLayout from "../PageLayout";

const ArchivesPageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <PageLayout>
      <section className={styles.ArchivesPageLayout}>{children}</section>
    </PageLayout>
  );
};

export default ArchivesPageLayout;
