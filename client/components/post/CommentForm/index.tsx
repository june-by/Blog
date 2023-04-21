import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import { useAddComment } from "Hooks/Comment";
import { useGetUserInfo } from "Hooks/User";
import styles from "./styles.module.scss";
import MESSAGE from "constants/message";

const CommentForm = () => {
  const { query } = useRouter();
  const AddCommentMutation = useAddComment(Number(query.id));
  const CommentRef = useRef<HTMLTextAreaElement>(null);

  const { data: UserInfo } = useGetUserInfo();

  const isLogin = UserInfo === null ? false : true;

  const submitComment = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!CommentRef.current) return;
      if (!isLogin) return alert(MESSAGE.LOGIN_NEEDED);
      if (CommentRef.current.value === "") return alert(MESSAGE.COMMENT_CONTENT_NEEDED);
      AddCommentMutation.mutate({
        postId: Number(query.id),
        comment: CommentRef.current.value,
      });
      CommentRef.current.value = "";
    },
    [AddCommentMutation, isLogin, query.id]
  );

  return (
    <div className={styles.CommentForm}>
      <form onSubmit={submitComment} data-testid="commentForm">
        <textarea
          data-testid="commentTextarea"
          ref={CommentRef}
          disabled={!isLogin}
          placeholder={isLogin ? MESSAGE.COMMENT_PLEASE : MESSAGE.LOGIN_NEEDED}
        />
        <button>등록</button>
      </form>
    </div>
  );
};

export default CommentForm;
