import React from "react";
import PostSkeleton from "components/post/Skeleton";
import PostsSkelton from "components/posts/postList/Skeleton";

const Loading = ({ nextUrl }: { nextUrl: string }) => <>{IsPostPage(nextUrl) ? <PostSkeleton /> : <PostsSkelton />}</>;

const IsPostPage = (url: string) => {
  return url?.includes("/post/") ? true : false;
};

export default Loading;
