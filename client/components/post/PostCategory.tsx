import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { PostType } from "@Types/post";

const PostCategory = ({ category }: Pick<PostType, "category">) => {
  return (
    <Link className={styles.PostCategory} href={`/?category=${category}`}>
      {category}
    </Link>
  );
};

export default PostCategory;
