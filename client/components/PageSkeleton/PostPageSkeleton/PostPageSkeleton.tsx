import React from "react";
import styles from "./styles.module.scss";

const PostPageSkeleton = () => {
  return (
    <>
      <div className={styles.PostHeaderSkeletonWrapper}>
        <div className={styles.TitleSkeleton}></div>
        <div className={styles.TitleSkeletonMobile}></div>
        <div
          className={`${styles.TitleSkeletonMobile} ${styles.TitleSecond}`}
        ></div>
        <div className={styles.DateSkeleton}></div>
        <div className={styles.TagSkeleton}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.PostContentSkeletonWrapper}>
        <div className={styles.PostContentSkeleton}></div>
        <div className={styles.TopicSkeleton}>
          {Array.from({ length: 6 }, () => 0).map((value, idx) => {
            return <div key={idx}></div>;
          })}
        </div>
      </div>
    </>
  );
};

export default PostPageSkeleton;
