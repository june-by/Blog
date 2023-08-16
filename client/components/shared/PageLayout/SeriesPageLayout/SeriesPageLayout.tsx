import React from "react";
import styles from "./styles.module.scss";
import PageLayout from "../PageLayout";
const SeriesPageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <PageLayout>
      <section className={styles.SeriesPageLayout}>{children}</section>
    </PageLayout>
  );
};

export default SeriesPageLayout;
