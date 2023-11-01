import React from "react";
import styles from "./styles.module.scss";
import { PostType } from "@Types/post";
import { getPostViewCountAPI } from "@services/post";

const PostViewCount = async ({ id }: Pick<PostType, "id">) => {
  const viewCount = await getPostViewCountAPI(id);

  return (
    <div className={styles.PostViewCount}>
      <span>조회수 : {Number(viewCount) + 1}</span>
    </div>
  );
};

export default PostViewCount;
