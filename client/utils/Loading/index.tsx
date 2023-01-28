import React from "react";
import PostSkeleton from "components/Block/Post/Skeleton";
import PostsSkelton from "components/Block/Posts/Skeleton";

const Loading = (nextUrl: string) => {
  return <>{IsPostPage(nextUrl) ? <PostSkeleton /> : <PostsSkelton />}</>;
};

const IsPostPage = (url: string) => {
  return url?.includes("/post/") ? true : false;
};

export default Loading;
