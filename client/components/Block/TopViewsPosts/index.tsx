import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { useGetTopViewsPosts } from "../../../hooks/Post";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

const TopViewsPosts = () => {
  const { data, isLoading } = useGetTopViewsPosts();
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  const gotoPost = useCallback(
    (id: number) => () => {
      push(`/post/${id}`);
    },
    []
  );
  return (
    <div className={`${styles.TopViewsPosts} ${styles[String(theme)]}`}>
      {!isLoading ? (
        <>
          <h3 className={styles.title}>조회수 Top10</h3>
          <div className={styles.contents}>
            {data?.map((post, idx) => (
              <div className={styles.content} key={post.title} onClick={gotoPost(post.id)}>
                {idx + 1}. {post.title}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.SkeletonWrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
            <div key={v + 1020} className={styles.TopViewsSkeleton}></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopViewsPosts;
