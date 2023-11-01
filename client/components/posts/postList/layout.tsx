import React, { type PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const PostsListLayout = ({ children }: PropsWithChildren) => {
  return <section className={styles.PostsRoot}>{children}</section>;
};

export default PostsListLayout;
