import ErrorHelper from "components/shared/errorHelper";
import NoPost from "./NoPost";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import React from "react";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { PostListPageDataType } from "@Types";
import InfiniteScroll from "components/shared/infiniteScroll";
import PostsListLayout from "./layout";
import PostCard from "./PostCard";
import PostCardSkeletonList from "./PostCardSkeletonList";
import PostsListTitle from "components/shared/PostsListTitle";
import PostSearchBox from "./PostSearchBox";
interface Props {
  params: string;
  query: (
    params: string
  ) => UseInfiniteQueryResult<PostListPageDataType[], unknown>;
}

const PostList = ({ params, query }: Props) => {
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

  useRestoreSrollPos();

  if (isError) {
    return <ErrorHelper error={error} reset={refetch} />;
  }

  const isPostsExist = data?.pages[0]?.length !== 0 ? true : false;

  if (!isPostsExist) {
    return <NoPost />;
  }

  return (
    <PostsListLayout>
      <>
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
      </>
    </PostsListLayout>
  );
};

export default PostList;
