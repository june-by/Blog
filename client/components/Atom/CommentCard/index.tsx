import React from "react";
import { CommentType } from "Types/post";
import dateForm from "utils/dateForm";
import styles from "./styles.module.scss";

const CommentCard = ({ comment, idx }: { comment: CommentType | null; idx: number }) => {
  return (
    <div
      className={styles.CommentCard}
      data-testid="CommentCard"
      style={{ borderTop: idx === 0 ? "0.5px solid #c8c8c8" : "" }}
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

export default CommentCard;
