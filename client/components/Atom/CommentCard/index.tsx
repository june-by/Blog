import React from "react";
import { CommentType } from "../../../Types/Post";
import { dateForm } from "../../../utils/dateForm";
import styles from "./styles.module.scss";

const CommentCard = ({ comment, idx }: { comment: CommentType | null; idx: number }) => {
  return (
    <div className={styles.CommentCard} style={{ borderTop: idx === 0 ? "0.5px solid #c8c8c8" : "" }}>
      <div className={styles.CommentTop}>
        <h3>{comment?.User.nickname}님</h3>
        <span>{dateForm(comment!.createdAt)}</span>
      </div>
      <div className={styles.CommentContent}>
        <span>{comment?.content}</span>
      </div>
    </div>
  );
};

export default CommentCard;
