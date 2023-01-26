import POSTS_PER_PAGE from "constants/postsPerPage";
import useRestoreSrollPos from "Hooks/useRestoreScrollPos";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import NoPost from "../NoPost";
import PostCard from "../PostCard";
import PostCardSkeleton from "../PostCard/Skeleton";
import styles from "./styles.module.scss";

interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}

const InfinitePosts = ({ params, query }: Props) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, isError, refetch } = query(params);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  useRestoreSrollPos();

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

export default InfinitePosts;

function isPostExist(data: PostsType[] | undefined) {
  return data?.length !== 0 ? true : false;
}
