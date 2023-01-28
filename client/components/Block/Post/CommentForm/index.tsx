import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import { useAddComment } from "Hooks/Comment";
import { useGetUserInfo } from "Hooks/User";
import styles from "./styles.module.scss";

const CommentForm = () => {
  const { query } = useRouter();
  const AddCommentMutation = useAddComment(Number(query.id));
  const CommentRef = useRef<HTMLTextAreaElement>(null);

  const { data: UserInfo } = useGetUserInfo();

  const submitComment = useCallback(
    (e) => {
      e.preventDefault();
      if (!CommentRef.current) return;
      if (UserInfo === null) return alert("* 로그인 후 댓글을 작성할 수 있습니다");
      if (CommentRef.current.value === "") return alert("* 내용을 작성해주세요");
      AddCommentMutation.mutate({
        postId: Number(query.id),
        comment: CommentRef.current.value,
      });
      CommentRef.current.value = "";
    },
    [AddCommentMutation, UserInfo, query.id]
  );

  return (
    <div className={styles.CommentForm}>
      <form onSubmit={submitComment} data-testid="commentForm">
        <textarea
          data-testid="commentTextarea"
          ref={CommentRef}
          disabled={UserInfo === null && true}
          placeholder={UserInfo === null ? "로그인 후 댓글을 작성할 수 있습니다" : "댓글을 작성해주세요"}
        />
        <button disabled={UserInfo === null && true}>등록</button>
      </form>
    </div>
  );
};

export default CommentForm;
