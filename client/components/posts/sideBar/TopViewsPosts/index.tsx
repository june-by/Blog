import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useGetTopViewsPosts } from "Hooks/Post";
import styles from "./styles.module.scss";
import ErrorHelper from "../../../shared/errorHelper";
import Link from "next/link";

const TopViewsPosts = () => {
  return (
    <section className={styles.TopViewsPosts}>
      <h3 className={styles.title}>조회수 Top10</h3>
      <div className={styles.ListWrapper}>
        <TopViewsPostsList />
      </div>
    </section>
  );
};

export default TopViewsPosts;

function TopViewsPostsList() {
  const { data, isLoading, isError, error, refetch } = useGetTopViewsPosts();

  if (isLoading) return <TopViewsPostsListSkeleton />;
  if (isError) return <ErrorHelper reset={refetch} error={error} />;

  return (
    <ul className={styles.contents}>
      {data?.map((post, idx) => (
        <li data-testid={`${idx}post`} className={styles.content} key={post.title}>
          <Link href={`/post/${post.id}`}>
            {idx + 1}. {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function TopViewsPostsListSkeleton() {
  return (
    <>
      <div className={styles.SkeletonWrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
          <div key={v + 1020} className={styles.TopViewsSkeleton}></div>
        ))}
      </div>
    </>
  );
}
