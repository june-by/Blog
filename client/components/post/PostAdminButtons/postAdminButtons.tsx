"use client";
import PostEditButton from "./postEditButton";

import React from "react";
import PostDeleteButton from "./postDeleteButton";
import styles from "./styles.module.scss";
import { PostType } from "@Types/post";

const PostAdminButtons = ({ id }: Pick<PostType, "id">) => {
  return (
    <div className={styles.PostAdminButtons}>
      <PostDeleteButton id={id} />
      <PostEditButton id={id} />
    </div>
  );
};

export default PostAdminButtons;
