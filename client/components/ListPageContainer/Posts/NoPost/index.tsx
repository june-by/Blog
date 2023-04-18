import React from "react";
import styles from "./styles.module.scss";

const NoPost = () => {
  return (
    <>
      <div className={styles.NoPost}>
        <img src="/noPost.png" alt="noPost" />
        <span>게시글이 없습니다.</span>
      </div>
    </>
  );
};

export default NoPost;
