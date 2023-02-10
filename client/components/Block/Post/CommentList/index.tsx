import React from "react";
import CommentCard from "components/Atom/CommentCard";
import styles from "./styles.module.scss";
import { useGetPostComments } from "Hooks/Post";
import { useRouter } from "next/router";

const CommentList = () => {
  const { query } = useRouter();
  const { data } = useGetPostComments(Number(query.id));

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
