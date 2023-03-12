import ErrorHelper from "components/Block/errorHelper";
import NoPost from "components/Block/ListPageContainer/Posts/NoPost";
import PostCard from "components/Block/ListPageContainer/Posts/PostCard";
import PostCardSkeleton from "components/Block/ListPageContainer/Posts/PostCard/Skeleton";
import POSTS_PER_PAGE from "constants/postsPerPage";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import styles from "./styles.module.scss";

interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}

const Posts = ({ params, query }: Props) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, isError, refetch, error } = query(params);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  useRestoreSrollPos();

  if (isError) return <ErrorHelper error={error} reset={refetch} />;

  return (
    <>
      {isPostExist(data?.pages[0]) ? (
        <section className={styles.PostsRoot}>
          {data?.pages.map((page) => (
            <>
              {page.map((post: PostsType) => (
                <PostCard key={post.id} post={post} />
              ))}
            </>
          ))}
          {isFetchingNextPage || isLoading ? (
            <>
              {Array.from({ length: POSTS_PER_PAGE }, () => 0).map((_, idx) => {
                return <PostCardSkeleton key={`postCardSkeleton${idx}`} />;
              })}
            </>
          ) : (
            <div ref={ref}></div>
          )}
        </section>
      ) : (
        <NoPost />
      )}
    </>
  );
};

export default Posts;

function isPostExist(data: PostsType[] | undefined) {
  return data?.length !== 0 ? true : false;
}
