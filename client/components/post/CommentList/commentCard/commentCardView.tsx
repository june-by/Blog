import React, { ReactNode } from "react";
import { CommentType } from "Types/comment";
import dateForm from "utils/dateForm";
import styles from "./styles.module.scss";

const CommentUserNickname = ({ nickname }: Pick<CommentType["User"], "nickname">) => {
  return <h4>{nickname}님</h4>;
};

const CommentDate = ({ createdAt }: Pick<CommentType, "createdAt">) => {
  return <span>{dateForm(createdAt)}</span>;
};

const CommentContent = ({ content }: Pick<CommentType, "content">) => {
  return (
    <div className={styles.CommentContent}>
      <span>{content}</span>
    </div>
  );
};

const CommentCardView = Object.assign(
  ({ children, isFirstComment }: { children: ReactNode; isFirstComment: boolean }) => (
    <div
      className={styles.CommentCard}
      data-testid="CommentCard"
      style={{ borderTop: isFirstComment ? "0.5px solid #c8c8c8" : "" }}
    >
      {children}
    </div>
  ),
  {
    UserNickname: CommentUserNickname,
    Date: CommentDate,
    Content: CommentContent,
  }
);

export default CommentCardView;
