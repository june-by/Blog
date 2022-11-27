import React from "react";
import { CommentType } from "Types/Post";
import CommentCard from "components/Atom/CommentCard";
import styles from "./styles.module.scss";

const CommentList = ({ Comments }: { Comments: Array<CommentType | null> }) => {
  return (
    <div className={styles.CommentList}>
      {Comments &&
        Comments?.map((comment, idx) => {
          return <CommentCard key={idx} comment={comment} idx={idx} />;
        })}
    </div>
  );
};

export default CommentList;
