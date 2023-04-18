import React from "react";
import CategoryChipSkeleton from "components/Atom/CategoryChip/Skeleton";
import PostCardSkeleton from "components/Block/ListPageContainer/Posts/PostCard/Skeleton";
import styles from "./styles.module.scss";
import { Category } from "constants/category";
import Header from "components/Header";
const PostsSkelton = () => {
  return (
    <>
      <Header />
      <div className={styles.SkeletonWrapper}>
        <div className={styles.CategoryChipWrapper}>
          {Category.map((v) => (
            <CategoryChipSkeleton key={v} />
          ))}
        </div>
        <div className={`${styles.PostsRoot} ${styles.Default}`}>
          {Array.from({ length: 16 }, () => 0).map((_, idx) => {
            return <PostCardSkeleton key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PostsSkelton;
