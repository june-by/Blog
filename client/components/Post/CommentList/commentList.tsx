import React from "react";
import CommentCard from "components/Post/CommentList/commentCard";
import styles from "./styles.module.scss";
import { useGetPostComments } from "Hooks/Post";
import { useRouter } from "next/router";

const CommentList = () => {
  const { query } = useRouter();
  const { data, isLoading: isFetchCommentsLoading } = useGetPostComments(Number(query.id));

  if (isFetchCommentsLoading) return <></>;

  return (
    <div className={styles.CommentList}>
      {data?.comments &&
        data?.comments?.map((comment, idx) => {
          return <CommentCard key={idx} comment={comment} idx={idx} />;
        })}
    </div>
  );
};

export default CommentList;
