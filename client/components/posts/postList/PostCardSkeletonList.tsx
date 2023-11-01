import React from "react";
import PostCard from "./PostCard";
import { POSTS_PER_PAGE } from "@constants";

const PostCardSkeletonList = () => {
  return (
    <>
      {Array.from({ length: POSTS_PER_PAGE }, () => 0).map((_, idx) => {
        return <PostCard.Skeleton key={`postCardSkeleton${idx}`} />;
      })}
    </>
  );
};

export default PostCardSkeletonList;
