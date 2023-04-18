import React from "react";
import PostContentSkeleton from "components/Post/PostContent/Skeleton";
import PostTopSkeleton from "components/Post/PostTop/Skeleton";
import styles from "./styles.module.scss";
import Header from "components/Header";

const PostSkeleton = () => {
  return (
    <>
      <Header />
      <div className={styles.PostSkeletonWrapper}>
        <PostTopSkeleton />
        <PostContentSkeleton />
      </div>
    </>
  );
};

export default PostSkeleton;