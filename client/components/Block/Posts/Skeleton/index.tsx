import React from "react";
import { Category } from "../../../../utils/variable";
import CategoryChipSkeleton from "../../../Atom/CategoryChip/Skeleton";
import PostCardSkeleton from "../../PostCard/Skeleton";
import HeaderSkeleton from "../../../Layout/Header/Skeleton";
import styles from "../styles.module.scss";
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
