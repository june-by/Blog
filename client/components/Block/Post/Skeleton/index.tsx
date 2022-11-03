import React from "react";
import HeaderSkeleton from "../../../layout/Header/Skeleton";
import PostContentSkeleton from "../PostContent/Skeleton";
import PostTopSkeleton from "../PostTop/Skeleton";
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
