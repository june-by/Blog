import React from "react";
import styles from "./styles.module.scss";

const PostsListLayout = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.PostsRoot}>{children}</section>;
};

export default PostsListLayout;
