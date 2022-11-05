import React from "react";
import styles from "./styles.module.scss";
interface Props {
  isPostExist: boolean;
}

const NoPost = ({ isPostExist }: Props) => {
  return (
    <>
      {!isPostExist && (
        <div className={styles.NoPost}>
          <img src="/noPost.png" alt="noPost" />
          <span>게시글이 없습니다.</span>
        </div>
      )}
    </>
  );
};

export default NoPost;
