import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

const PostTitle = ({ title }: Props) => {
  return <h1 className={styles.PostTitle}>{title}</h1>;
};

export default PostTitle;
