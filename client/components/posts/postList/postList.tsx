import ErrorHelper from "components/shared/errorHelper";
import NoPost from "./NoPost";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import React from "react";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import InfiniteScroll from "components/_hoc/infiniteScroll";
import PostsListLayout from "./layout";
import PostCard from "./PostCard";
import PostCardSkeletonList from "./PostCardSkeletonList";
import PostsListTitle from "components/shared/PostsListTitle";
import PostSearchBox from "./PostSearchBox";
interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
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

  if (isError) return <ErrorHelper error={error} reset={refetch} />;

  const isPostsExist = data?.pages[0]?.length !== 0 ? true : false;

  if (!isPostsExist) return <NoPost />;

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
              {page.map((post: PostsType) => (
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
