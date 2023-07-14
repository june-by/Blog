import React from "react";
import styles from "./styles.module.scss";

const PostTopSkeleton = () => {
  return (
    <div className={styles.PostTopSkeleton}>
      <div className={styles.GoBackSkeleton}></div>
      <div className={styles.TitleSkeleton}></div>
      <div className={styles.TitleSkeletonMobile}></div>
      <div className={`${styles.TitleSkeletonMobile} ${styles.TitleSecond}`}></div>
      <div className={styles.DateSkeleton}></div>
      <div className={styles.TagSkeleton}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PostTopSkeleton;
