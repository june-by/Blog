import React from "react";
import styles from "./styles.module.scss";

const PostCardSkeleton = () => {
  return (
    <div className={styles.PostCardSkeleton}>
      <div className={styles.PostCardSkeleton_thumbNailWrapper} />
      <div className={styles.PostCardSkeleton_articleWrapper}>
        <div>
          <div className={styles.titleSkeleton} />
          <div className={styles.tabSkeletonWrap}>
            <div className={styles.tabSkeleton} />
            <div className={styles.tabSkeleton} />
            <div className={styles.tabSkeleton} />
          </div>
        </div>
        <div className={styles.shortDescriptionSkeletonWrap}>
          <div className={styles.shortDescriptionSkeleton} />
          <div className={styles.shortDescriptionSkeleton} />
        </div>
        <div className={styles.bottomSkeleton} />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
