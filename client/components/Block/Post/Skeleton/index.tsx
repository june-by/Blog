import React from "react";
import PostContentSkeleton from "components/Block/Post/PostContent/Skeleton";
import PostTopSkeleton from "components/Block/Post/PostTop/Skeleton";
import styles from "./styles.module.scss";
import Header from "components/Block/Header";

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
