import React from "react";
import styles from "../postCard.module.scss";

const PostCardSkeleton = () => {
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCard_imgWrapper}>
        <div className={styles.SkeletonImg}></div>
      </div>
      <div className={styles.PostCard_titleBox}>
        <div className={styles.SkeletonTitle}></div>
        <div className={styles.SkeletonTag}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.SkletonDate}></div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
