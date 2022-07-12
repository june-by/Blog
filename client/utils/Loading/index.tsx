import React from "react";
import PostSkeleton from "../../components/Block/Post/Skeleton";

const Loading = (nextUrl: string, theme: string) => {
  return (
    <>
      <PostSkeleton theme={theme} />
    </>
  );
};

const IsPostPage = (url: string) => {
  return url.includes("/post/") ? true : false;
};

export default Loading;
