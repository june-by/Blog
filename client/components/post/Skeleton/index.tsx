import React from "react";
import PostContentSkeleton from "components/post/PostContent/Skeleton";
import PostTopSkeleton from "components/post/PostHeader/Skeleton";
import styles from "./styles.module.scss";

const PostSkeleton = () => {
  return (
    <>
      <div className={styles.PostSkeletonWrapper}>
        <PostTopSkeleton />
        <PostContentSkeleton />
      </div>
    </>
  );
};

export default PostSkeleton;
