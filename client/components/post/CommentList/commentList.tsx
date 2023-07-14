import React from "react";
import CommentCard from "components/post/CommentList/commentCard";
import styles from "./styles.module.scss";
import { useGetPostComments } from "Hooks/Post";
import useQueryId from "Hooks/useQueryId";

const CommentList = () => {
  const postId = useQueryId();
  const { data, isLoading: isFetchCommentsLoading } = useGetPostComments(postId);

  if (isFetchCommentsLoading) return null;

  if (!data?.comments) return null;

  return (
    <div className={styles.CommentList}>
      {data.comments.map((comment, idx) => {
        return <CommentCard key={idx} comment={comment} idx={idx} />;
      })}
    </div>
  );
};

export default CommentList;
