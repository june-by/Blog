import React from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

const PostPageSkeleton = () => {
  return (
    <>
      <div className={styles.PostHeaderSkeletonWrapper}>
        <div className={styles.TitleSkeleton}></div>
        <div className={styles.TitleSkeletonMobile}></div>
        <div
          className={classnames(styles.TitleSkeletonMobile, styles.TitleSecond)}
        />
        <div className={styles.DateSkeleton} />
        <div className={styles.TagSkeleton}>
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={styles.PostContentSkeletonWrapper}>
        <div className={styles.PostContentSkeleton} />
        <div className={styles.TopicSkeleton}>
          {Array.from({ length: 6 }, () => 0).map((v, idx) => (
            <div key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostPageSkeleton;
