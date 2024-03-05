"use client";
import React, { useState } from "react";
import InfiniteScroll from "../shared/InfiniteScroll";
import { Post } from "contentlayer/generated";
import { NoPost } from "../post";
import PostCard from "../PostCard";

const POST_COUNTE_PER_PAGE = 8;

interface Props {
  allPosts: Post[];
}

const PostList = ({ allPosts }: Props) => {
  const [page, setPage] = useState(1);

  if (!allPosts) {
    return <NoPost />;
  }

  const viewedPosts = allPosts.slice(0, page * POST_COUNTE_PER_PAGE);
  const hasMorePost = viewedPosts.length % POST_COUNTE_PER_PAGE === 0;

  return (
    <>
      <InfiniteScroll
        hasMore={hasMorePost}
        fetchNext={() => setPage((prev) => prev + 1)}
      >
        <>
          {viewedPosts.map((post) => (
            <PostCard {...post} key={post._id} />
          ))}
        </>
      </InfiniteScroll>
    </>
  );
};

export default PostList;
