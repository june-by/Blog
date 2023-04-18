import React from "react";
import { CommentType } from "Types/comment";
import dateForm from "utils/dateForm";
import styles from "./styles.module.scss";

interface Props {
  comment: CommentType | null;
  idx: number;
}

const CommentCard = ({ comment, idx }: Props) => {
  return (
    <div
      className={styles.CommentCard}
      data-testid="CommentCard"
      style={{ borderTop: isFirstComment(idx) ? "0.5px solid #c8c8c8" : "" }}
    >
      <div className={styles.CommentTop}>
        <h4>{comment?.User.nickname}님</h4>
        <span>{dateForm(comment!.createdAt)}</span>
      </div>
      <div className={styles.CommentContent}>
        <span>{comment?.content}</span>
      </div>
    </div>
  );
};

function isFirstComment(idx: number) {
  if (idx === 0) return true;
  return false;
}

export default CommentCard;
