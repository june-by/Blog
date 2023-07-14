import { useGetPostViewCount } from "Hooks/Post";
import React from "react";
import styles from "./styles.module.scss";
import useQueryId from "Hooks/useQueryId";

const PostViewCount = () => {
  const postId = useQueryId();

  const { data: viewCount, isLoading: isFetchViewCountLoading } = useGetPostViewCount(postId);

  return (
    <div className={styles.viewCountWrapper}>
      <span>조회수 : {isFetchViewCountLoading ? 0 : Number(viewCount) + 1}</span>
    </div>
  );
};

export default PostViewCount;
