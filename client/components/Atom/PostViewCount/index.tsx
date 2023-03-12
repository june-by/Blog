import { useGetPostViewCount } from "Hooks/Post";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

const PostViewCount = () => {
  const { query } = useRouter();

  const { data: viewCount, isLoading: isFetchViewCountLoading } = useGetPostViewCount(Number(query.id));

  return (
    <div className={styles.viewCountWrapper}>
      <span>조회수 : {isFetchViewCountLoading ? 0 : Number(viewCount) + 1}</span>
    </div>
  );
};

export default PostViewCount;
