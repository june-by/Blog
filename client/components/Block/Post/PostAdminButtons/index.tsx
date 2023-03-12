import PostDelBtn from "components/Atom/PostDelBtn";
import PostEditBtn from "components/Atom/PostEditBtn";
import { useGetUserInfo } from "Hooks/User";
import { useRouter } from "next/router";
import React from "react";
import IsAdmin from "utils/isAdmin";

const PostAdminButtons = () => {
  const { query } = useRouter();
  const { data: UserInfo } = useGetUserInfo();

  return (
    <div>
      {IsAdmin(UserInfo) && (
        <>
          <PostDelBtn />
          <PostEditBtn id={Number(query.id)} />
        </>
      )}
    </div>
  );
};

export default PostAdminButtons;
