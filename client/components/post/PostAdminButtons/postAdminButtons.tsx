"use client";

import PostEditButton from "./postEditButton";
import React from "react";
import PostDeleteButton from "./postDeleteButton";
import { useQueryId } from "@hooks";
import styles from "./styles.module.scss";

const PostAdminButtons = () => {
  const postId = useQueryId();

  return (
    <div className={styles.PostAdminButtons}>
      <PostDeleteButton />
      <PostEditButton id={postId} />
    </div>
  );
};

export default PostAdminButtons;
