import React, { useContext } from "react";
import { ThemeContext } from "utils/ThemeContext";
import styles from "../styles.module.scss";

const PostCardSkeleton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.PostCard} ${styles[theme]}`}>
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
