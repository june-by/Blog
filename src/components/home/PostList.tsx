"use client";
import React from "react";
import InfiniteScroll from "../shared/InfiniteScroll";
import { Post } from "contentlayer/generated";
import { NoPost } from "../post";
import PostCard from "../PostCard";
import { useSearchParams } from "next/navigation";
import { useStorageState } from "@/hooks";
import { generateSessionStorage } from "@/utils";

const POST_COUNTE_PER_PAGE = 8;

interface Props {
  allPosts: Post[];
}

const PostList = ({ allPosts }: Props) => {
  const searchParams = useSearchParams();
  const currentPathname = searchParams.toString() || "/";
  const [page, setPage] = useStorageState(currentPathname, { storage: generateSessionStorage(), defaultValue: 1 });
  if (allPosts.length === 0) {
    return <NoPost />;
  }
  console.log("page : ", page);
  const viewedPosts = allPosts.slice(0, page * POST_COUNTE_PER_PAGE);
  const hasMorePost = viewedPosts.length < allPosts.length;

  return (
    <>
      <InfiniteScroll hasMore={hasMorePost} fetchNext={() => setPage(page + 1)}>
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
