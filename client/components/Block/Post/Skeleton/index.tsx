import React from "react";
import HeaderSkeleton from "../../../Layout/Header/Skeleton";
import PostContentSkeleton from "../PostContent/Skeleton";
import PostTopSkeleton from "../PostTop/Skeleton";
import styles from "./styles.module.scss";

const PostSkeleton = ({ theme }: { theme: string }) => {
  return (
    <>
      <HeaderSkeleton theme={theme} />
      <div className={styles.PostSkeletonWrapper}>
        <PostTopSkeleton />
        <PostContentSkeleton />
      </div>
    </>
  );
};

export default PostSkeleton;
