import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useGetTopViewsPosts } from "Hooks/Post";
import styles from "./styles.module.scss";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "../../../errorHelper";

const TopViewsPosts = () => {
  return (
    <section className={styles.TopViewsPosts}>
      <h3 className={styles.title}>조회수 Top10</h3>
      <div className={styles.ListWrapper}>
        <AsyncBoundary
          suspenseFallback={<TopViewsPostsListSkeleton />}
          errorFallback={(props) => <ErrorHelper {...props} />}
        >
          <TopViewsPostsList />
        </AsyncBoundary>
      </div>
    </section>
  );
};

export default TopViewsPosts;

function TopViewsPostsList() {
  const { data } = useGetTopViewsPosts();
  const { push } = useRouter();
  const gotoPost = useCallback(
    (id: number) => () => {
      push(`/post/${id}`);
    },
    [push]
  );

  return (
    <ul className={styles.contents}>
      {data?.map((post, idx) => (
        <li data-testid={`${idx}post`} className={styles.content} key={post.title} onClick={gotoPost(post.id)}>
          {idx + 1}. {post.title}
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
