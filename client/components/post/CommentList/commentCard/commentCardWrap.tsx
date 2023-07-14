import { CommentType } from "Types/comment";
import React from "react";
import CommentCardView from "./commentCardView";
import styles from "./styles.module.scss";
interface Props {
  comment: CommentType | null;
  idx: number;
}

const { UserNickname, Date, Content } = CommentCardView;

const CommentCardWrap = ({ comment, idx }: Props) => {
  if (!comment) return null;

  const isFirstComment = idx === 0;

  return (
    <CommentCardView isFirstComment={isFirstComment}>
      <div className={styles.CommentTop}>
        <UserNickname nickname={comment.User.nickname} />
        <Date createdAt={comment.createdAt} />
      </div>
      <Content content={comment.content} />
    </CommentCardView>
  );
};

export default CommentCardWrap;
