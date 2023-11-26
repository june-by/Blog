"use client";

import ErrorHelper from "@components/shared/errorHelper";
import NoPost from "./NoPost";
import React from "react";
import InfiniteScroll from "@components/shared/InfiniteScroll";
import PostsListLayout from "./layout";
import PostCard from "./PostCard";
import PostCardSkeletonList from "./PostCardSkeletonList";
import PostsListTitle from "./PostsListTitle";
import PostSearchBox from "./PostSearchBox";
import { useSearchParams } from "next/navigation";
import {
  useGetCategoryPosts,
  useGetMainPost,
  useGetSearchPosts,
  useGetSeriesPosts,
  useGetTagPosts,
} from "@hooks/query";

const PostList = () => {
  const searchParams = useSearchParams();
  const query = getQuery(searchParams);
  const params = getParams(searchParams);

  const {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    refetch,
    error,
  } = query(params);

  if (isError) {
    return (
      <div>
        <ErrorHelper error={error} reset={refetch} />
      </div>
    );
  }

  const isPostsExist = data?.pages[0]?.length !== 0 ? true : false;

  if (!isPostsExist) {
    return <NoPost />;
  }

  return (
    <PostsListLayout>
      <PostsListTitle />
      <PostSearchBox />
      <InfiniteScroll
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isFetchingNextPage || isLoading}
        skeleton={<PostCardSkeletonList />}
      >
        {data?.pages.map((page) => (
          <>
            {page.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </>
        ))}
      </InfiniteScroll>
    </PostsListLayout>
  );
};

export default PostList;

function getQuery(searchParams: ReturnType<typeof useSearchParams>) {
  const search = searchParams?.get("search");
  const tag = searchParams?.get("tag");
  const category = searchParams?.get("category");
  const series = searchParams?.get("series");

  if (search) {
    return useGetSearchPosts;
  } else if (tag) {
    return useGetTagPosts;
  } else if (category) {
    return useGetCategoryPosts;
  } else if (series) {
    return useGetSeriesPosts;
  } else {
    return useGetMainPost;
  }
}

function getParams(searchParams: ReturnType<typeof useSearchParams>) {
  const search = searchParams?.get("search");
  const tag = searchParams?.get("tag");
  const category = searchParams?.get("category");
  const series = searchParams?.get("series");

  if (search) {
    return search;
  } else if (tag) {
    return tag;
  } else if (category) {
    return category;
  } else if (series) {
    return series;
  } else {
    return "";
  }
}
