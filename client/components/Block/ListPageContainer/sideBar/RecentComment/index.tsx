import React from "react";
import { useGetRecentComment } from "Hooks/Comment";
import styles from "./styles.module.scss";
import useGotoPage from "Hooks/useGotoPage";
import { RecentComment } from "Types/comment";

const RecentComments = () => {
  const { data, isLoading, isError } = useGetRecentComment();

  if (isError) return <></>;

  return (
    <section className={styles.RecentComment}>
      <h3>최근 댓글</h3>
      {!isLoading ? (
        <>
          {data && data.length > 0 ? (
            <ul className={styles.comments}>
              {data.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </ul>
          ) : (
            <NoComment />
          )}
        </>
      ) : (
        <div className={styles.SkeletonWrapper}>
          <CommentsSkeleton />
        </div>
      )}
    </section>
  );
};

function Comment({ comment }: { comment: RecentComment }) {
  const gotoPage = useGotoPage();
  return (
    <li className={styles.comment} onClick={gotoPage(`/post/${comment.Post.id}`)}>
      {comment.content}
    </li>
  );
}

function NoComment() {
  return <div className={styles.NoComments}>{"최근 작성된 댓글이 없어요 :("}</div>;
}

function CommentsSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((v) => (
        <div key={`commentSkeleton${v}`} className={styles.commentSkeleton}></div>
      ))}
    </>
  );
}

export default RecentComments;
