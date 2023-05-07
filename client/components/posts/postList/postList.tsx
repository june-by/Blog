import ErrorHelper from "components/shared/errorHelper";
import NoPost from "components/posts/postList/NoPost";
import PostCard from "components/posts/postList/postCard";
import PostCardSkeleton from "components/posts/postList/postCard/skeleton";
import POSTS_PER_PAGE from "constants/postsPerPage";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import React from "react";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import styles from "./styles.module.scss";
import InfiniteScroll from "components/_hoc/infiniteScroll";
import EtcCard from "./etcCard";

interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}

const PostList = ({ params, query }: Props) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, isError, refetch, error } = query(params);

  useRestoreSrollPos();

  if (isError) return <ErrorHelper error={error} reset={refetch} />;

  return (
    <>
      {isPostExist(data?.pages[0]) ? (
        <section className={styles.PostsRoot}>
          <EtcCard />
          <InfiniteScroll
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isLoading={isFetchingNextPage || isLoading}
            skeleton={
              <>
                {Array.from({ length: POSTS_PER_PAGE }, () => 0).map((_, idx) => {
                  return <PostCardSkeleton key={`postCardSkeleton${idx}`} />;
                })}
              </>
            }
          >
            <>
              {data?.pages.map((page) => (
                <>
                  {page.map((post: PostsType) => (
                    <PostCard key={post.title} post={post} />
                  ))}
                </>
              ))}
            </>
          </InfiniteScroll>
        </section>
      ) : (
        <NoPost />
      )}
    </>
  );
};

export default PostList;

function isPostExist(data: PostsType[] | undefined) {
  return data?.length !== 0 ? true : false;
}
