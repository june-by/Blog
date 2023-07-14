import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

const PostsListLayout = ({ children }: { children: ReactNode }) => {
  return <section className={styles.PostsRoot}>{children}</section>;
};

export default PostsListLayout;
