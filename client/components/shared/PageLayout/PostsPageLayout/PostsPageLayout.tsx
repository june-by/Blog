import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: JSX.Element;
}

const PostsPageLayout = ({ children }: Props) => {
  return (
    <section className={styles.ListContainerWrapper}>
      <section className={styles.mainContentsWrapper}>{children}</section>
    </section>
  );
};

export default PostsPageLayout;
