import PostEditButton from "./postEditButton";
import { useGetUserInfo } from "Hooks/User";
import { useRouter } from "next/router";
import React from "react";
import IsAdmin from "utils/isAdmin";
import PostDeleteButton from "./postDeleteButton";
import useQueryId from "Hooks/useQueryId";

const PostAdminButtons = () => {
  const postId = useQueryId();
  const { data: UserInfo } = useGetUserInfo();

  if (!IsAdmin(UserInfo)) return null;

  return (
    <div>
      <PostDeleteButton />
      <PostEditButton id={postId} />
    </div>
  );
};

export default PostAdminButtons;
