import React from "react";
import CategoryChipSkeleton from "components/Atom/CategoryChip/Skeleton";
import PostCardSkeleton from "components/Block/PostCard/Skeleton";
import HeaderSkeleton from "components/Layout/Header/Skeleton";
import styles from "../styles.module.scss";
import Category from "constants/category";
const PostsSkelton = () => {
  return (
    <>
      <HeaderSkeleton />
      <div className={styles.SkeletonWrapper}>
        <div className={styles.CategoryChipWrapper}>
          {Category.map((v) => (
            <CategoryChipSkeleton key={v} />
          ))}
        </div>
        <div className={`${styles.PostsRoot} ${styles.Default}`}>
          {Array.from({ length: 12 }, () => 0).map((_, idx) => {
            return <PostCardSkeleton key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PostsSkelton;
