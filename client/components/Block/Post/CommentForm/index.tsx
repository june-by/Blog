import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import { useAddComment } from "../../../../Hooks/Post";
import styles from "./styles.module.scss";

const CommentForm = () => {
  const { query } = useRouter();
  const AddCommentMutation = useAddComment();
  const CommentRef = useRef<HTMLTextAreaElement>(null);

  const submitComment = useCallback((e) => {
    e.stopPropagation();
    if (!CommentRef.current) return;
    if (CommentRef.current.value === "") return alert("* 내용을 작성해주세요");
    AddCommentMutation.mutate({ postId: Number(query.id), comment: CommentRef.current.value });
  }, []);

  return (
    <div className={styles.CommentForm}>
      <form onSubmit={submitComment}>
        <textarea ref={CommentRef} placeholder="댓글을 작성해주세요" />
        <button>등록</button>
      </form>
    </div>
  );
};

export default CommentForm;
