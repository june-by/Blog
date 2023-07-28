import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const NoPost = () => {
  return (
    <>
      <div className={styles.NoPost}>
        <Image width={65} height={78} src="/noPost.png" alt="noPost" />
        <span>게시글이 없습니다.</span>
      </div>
    </>
  );
};

export default NoPost;
