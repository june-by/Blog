import PostEditButton from "./postEditButton";
import { useGetUserInfo } from "Hooks/User";
import React from "react";
import IsAdmin from "utils/isAdmin";
import PostDeleteButton from "./postDeleteButton";
import useQueryId from "Hooks/useQueryId";
import styles from "./styles.module.scss";

const PostAdminButtons = () => {
  const postId = useQueryId();
  const { data: UserInfo } = useGetUserInfo();

  if (!IsAdmin(UserInfo)) return null;

  return (
    <div className={styles.PostAdminButtons}>
      <PostDeleteButton />
      <PostEditButton id={postId} />
    </div>
  );
};

export default PostAdminButtons;
