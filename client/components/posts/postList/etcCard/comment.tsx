import { useGetRecentComment } from "Hooks/Comment";
import React from "react";
import styles from "./styles.module.scss";
import { RecentComment } from "Types/comment";
import useGotoPage from "Hooks/useGotoPage";

const CommentWrap = () => {
  const { data: commentData } = useGetRecentComment();

  if (!commentData) return null;

  return (
    <div className={styles.commentCard}>
      <h3>최근 댓글</h3>
      {commentData.length > 0 ? (
        <ul className={styles.comments}>
          {commentData.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </ul>
      ) : (
        <NoComment />
      )}
    </div>
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

const NoComment = () => {
  return <div className={styles.NoComments}>{"최근 작성된 댓글이 없어요 :("}</div>;
};

export default CommentWrap;
