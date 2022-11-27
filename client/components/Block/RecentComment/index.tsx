import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { useGetRecentComment } from "Hooks/Comment";
import { ThemeContext } from "utils/ThemeContext";
import styles from "./styles.module.scss";

const RecentComment = () => {
  const { data, isLoading } = useGetRecentComment();
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  const gotoPost = useCallback(
    (id: number) => () => {
      push(`/post/${id}`);
    },
    []
  );

  return (
    <div className={`${styles.RecentComment} ${styles[String(theme)]}`}>
      <h3>최근 댓글</h3>
      {!isLoading ? (
        <>
          {data && data.length > 0 ? (
            <div className={styles.comments}>
              {data.map((comment) => (
                <div
                  key={comment.id}
                  className={styles.comment}
                  onClick={gotoPost(comment.Post.id)}
                >
                  {comment.content}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.NoComments}>{"댓글이 없어요 :("}</div>
          )}
        </>
      ) : (
        <div className={styles.SkeletonWrapper}>
          {[1, 2, 3, 4, 5].map((v) => (
            <div key={v + 1000} className={styles.commentSkeleton}></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentComment;
