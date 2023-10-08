import { usePostContext } from "context/postContext";
import React from "react";
import styles from "./styles.module.scss";

const PostTitle = () => {
  const { title } = usePostContext();

  if (!title) {
    return null;
  }
  return <h1 className={styles.PostTitle}>{title}</h1>;
};

export default PostTitle;
