import React from "react";
import HeaderSkeleton from "components/Layout/Header/Skeleton";
import PostContentSkeleton from "components/Block/Post/PostContent/Skeleton";
import PostTopSkeleton from "components/Block/Post/PostTop/Skeleton";
import styles from "./styles.module.scss";

const PostSkeleton = () => {
  return (
    <>
      <HeaderSkeleton />
      <div className={styles.PostSkeletonWrapper}>
        <PostTopSkeleton />
        <PostContentSkeleton />
      </div>
    </>
  );
};

export default PostSkeleton;
