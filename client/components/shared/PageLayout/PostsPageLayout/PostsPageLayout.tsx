import React from "react";
import styles from "./styles.module.scss";
import PageLayout from "../PageLayout";

interface Props {
  children: JSX.Element;
}

const PostsPageLayout = ({ children }: Props) => {
  return (
    <PageLayout>
      <section className={styles.mainContentsWrapper}>{children}</section>
    </PageLayout>
  );
};

export default PostsPageLayout;
