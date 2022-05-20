import React from "react";
import { CommentType } from "../../../../Types/Post";
import CommentCard from "../../../Atom/CommentCard";
import styles from "./styles.module.scss";

const CommentList = ({ Comments }: { Comments: Array<CommentType> | undefined }) => {
  return (
    <div className={styles.CommentList}>
      {Comments?.map((comment, idx) => {
        return <CommentCard key={comment.id} comment={comment} idx={idx} />;
      })}
    </div>
  );
};

export default CommentList;
