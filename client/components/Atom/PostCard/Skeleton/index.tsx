import React from "react";
import Loading from "../../../../utils/Loading";
import styles from "../styles.module.scss";

const PostCardSkeleton = ({ loading }: { loading: boolean }) => {
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCard_imgWrapper}>{Loading(loading, 25)}</div>
      <div className={styles.PostCard_titleBox}>{Loading(loading, 15)}</div>
    </div>
  );
};

export default PostCardSkeleton;
