import React from "react";
import PostSkeleton from "components/Post/Skeleton";
import PostsSkelton from "components/ListPageContainer/Posts/Skeleton";

const Loading = ({ nextUrl }: { nextUrl: string }) => <>{IsPostPage(nextUrl) ? <PostSkeleton /> : <PostsSkelton />}</>;

const IsPostPage = (url: string) => {
  return url?.includes("/post/") ? true : false;
};

export default Loading;
