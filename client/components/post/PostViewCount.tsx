"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { PostType } from "@Types/post";
import { getPostViewCountAPI } from "@services/post";

const PostViewCount = ({ id }: Pick<PostType, "id">) => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    getPostViewCountAPI(id).then((res) => {
      setViewCount(res.viewCount);
    });
  }, [id]);

  return (
    <div className={styles.PostViewCount}>
      <span>조회수 : {viewCount ? Number(viewCount) + 1 : null}</span>
    </div>
  );
};

export default PostViewCount;
