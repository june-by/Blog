import React from "react";
import GoBackButton from "./goBackButton";
import PostAdminButtons from "./PostAdminButtons";
import styles from "./postHeader.module.scss";

const PostHeader = () => {
  return (
    <div className={styles.postHeader}>
      <GoBackButton />
      <PostAdminButtons />
    </div>
  );
};

export default PostHeader;
