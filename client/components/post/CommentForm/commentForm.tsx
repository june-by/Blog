import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useAddComment } from "Hooks/Comment";
import { useGetUserInfo } from "Hooks/User";
import styles from "./styles.module.scss";
import MESSAGE from "constants/message";
import { toast } from "react-toastify";

const CommentForm = () => {
  const { query } = useRouter();
  const { mutate: addCommentMutate } = useAddComment(Number(query.id));
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const { data: userData } = useGetUserInfo();

  const isLogin = !!userData;

  const submitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentRef.current) return;
    if (!isLogin) return toast.error(MESSAGE.LOGIN_NEEDED);
    if (commentRef.current.value === "") return toast.error(MESSAGE.COMMENT_CONTENT_NEEDED);

    addCommentMutate({
      postId: Number(query.id),
      comment: commentRef.current.value,
    });
    commentRef.current.value = "";
  };

  return (
    <div className={styles.CommentForm}>
      <form onSubmit={submitComment} data-testid="commentForm">
        <textarea
          data-testid="commentTextarea"
          ref={commentRef}
          disabled={!isLogin}
          placeholder={isLogin ? MESSAGE.COMMENT_PLEASE : MESSAGE.LOGIN_NEEDED}
        />
        <button>등록</button>
      </form>
    </div>
  );
};

export default CommentForm;
