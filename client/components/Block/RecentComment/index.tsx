import React, { useContext } from "react";
import { useGetRecentComment } from "Hooks/Comment";
import { ThemeContext } from "components/_hoc/themeContext";
import styles from "./styles.module.scss";
import useGotoPage from "Hooks/useGotoPage";

const RecentComment = () => {
  const { data, isLoading } = useGetRecentComment();
  const { theme } = useContext(ThemeContext);
  const gotoPage = useGotoPage();

  return (
    <section className={`${styles.RecentComment} ${styles[String(theme)]}`}>
      <h3>최근 댓글</h3>
      {!isLoading ? (
        <>
          {data && data.length > 0 ? (
            <ul className={styles.comments}>
              {data.map((comment) => (
                <li key={comment.id} className={styles.comment} onClick={gotoPage(`/post/${comment.Post.id}`)}>
                  {comment.content}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.NoComments}>{"댓글이 없어요 :("}</div>
          )}
        </>
      ) : (
        <div className={styles.SkeletonWrapper}>
          {[1, 2, 3, 4, 5].map((v) => (
            <div key={`commentSkeleton${v}`} className={styles.commentSkeleton}></div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentComment;
