import { usePostContext } from "@contexts/postContext";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const PostCategory = () => {
  const { category } = usePostContext();

  if (!category) {
    return null;
  }
  return (
    <Link className={styles.PostCategory} href={`/?category=${category}`}>
      {category}
    </Link>
  );
};

export default PostCategory;
