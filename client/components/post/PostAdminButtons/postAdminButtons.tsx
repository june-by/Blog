import PostEditButton from "./postEditButton";
import { useGetUserInfo } from "Hooks/User";
import { useRouter } from "next/router";
import React from "react";
import IsAdmin from "utils/isAdmin";
import PostDeleteButton from "./postDeleteButton";

const PostAdminButtons = () => {
  const { query } = useRouter();
  const { data: UserInfo } = useGetUserInfo();

  return (
    <div>
      {IsAdmin(UserInfo) && (
        <>
          <PostDeleteButton />
          <PostEditButton id={Number(query.id)} />
        </>
      )}
    </div>
  );
};

export default PostAdminButtons;
