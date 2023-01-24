import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { useGetTopViewsPosts } from "Hooks/Post";
import { ThemeContext } from "components/_hoc/themeContext";
import styles from "./styles.module.scss";
import QueryErrorBoundary from "components/_hoc/queryErrorBoundary";

const TopViewsPosts = () => {
  const { data, isLoading, isError, refetch } = useGetTopViewsPosts();
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  const gotoPost = useCallback(
    (id: number) => () => {
      push(`/post/${id}`);
    },
    [push]
  );

  return (
    <section className={`${styles.TopViewsPosts} ${styles[String(theme)]}`}>
      {!isLoading ? (
        <QueryErrorBoundary isError={isError} refetch={refetch}>
          <>
            <h3 className={styles.title}>조회수 Top10</h3>
            <ul className={styles.contents}>
              {data?.map((post, idx) => (
                <li data-testid={`${idx}post`} className={styles.content} key={post.title} onClick={gotoPost(post.id)}>
                  {idx + 1}. {post.title}
                </li>
              ))}
            </ul>
          </>
        </QueryErrorBoundary>
      ) : (
        <div className={styles.SkeletonWrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
            <div key={v + 1020} className={styles.TopViewsSkeleton}></div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopViewsPosts;
