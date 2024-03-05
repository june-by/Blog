"use client";
import React, { useState } from "react";
import InfiniteScroll from "../shared/InfiniteScroll";
import { Post } from "contentlayer/generated";
import { NoPost } from "../post";
import PostCard from "../PostCard";
import { useSearchParams } from "next/navigation";

const POST_COUNTE_PER_PAGE = 8;

interface Props {
  allPosts: Post[];
}

const storedPage: Map<string, number> = new Map();

const PostList = ({ allPosts }: Props) => {
  const searchParams = useSearchParams();
  const currentPathname = searchParams.toString() || "/";

  const [page, setPage] = useState(storedPage.get(currentPathname) || 1);

  if (!allPosts) {
    return <NoPost />;
  }

  const viewedPosts = allPosts.slice(0, page * POST_COUNTE_PER_PAGE);
  const hasMorePost = viewedPosts.length % POST_COUNTE_PER_PAGE === 0;

  return (
    <>
      <InfiniteScroll
        hasMore={hasMorePost}
        fetchNext={() => {
          const nextPage = page + 1;
          setPage(nextPage);
          storedPage.set(currentPathname, nextPage);
        }}
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
