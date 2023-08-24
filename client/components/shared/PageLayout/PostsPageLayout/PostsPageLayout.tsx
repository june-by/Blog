import React from "react";
import styles from "./styles.module.scss";
interface Props {
  children: JSX.Element;
}

const PostsPageLayout = ({ children }: Props) => {
  return <section className={styles.mainContentsWrapper}>{children}</section>;
};

export default PostsPageLayout;
