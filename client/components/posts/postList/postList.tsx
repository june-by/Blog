import ErrorHelper from "components/shared/errorHelper";
import NoPost from "components/posts/postList/NoPost";
import PostCard from "components/posts/postList/postCard";
import PostCardSkeleton from "components/posts/postList/postCard/Skeleton";
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

const PostList = ({ params, query }: Props) => {
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
                <PostCard key={post.title} post={post} />
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

export default PostList;

function isPostExist(data: PostsType[] | undefined) {
  return data?.length !== 0 ? true : false;
}
