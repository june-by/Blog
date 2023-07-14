import React, { useRef } from "react";
import { useAddComment } from "Hooks/Comment";
import { useGetUserInfo } from "Hooks/User";
import styles from "./styles.module.scss";
import MESSAGE from "constants/message";
import { toast } from "react-toastify";
import useQueryId from "Hooks/useQueryId";

const CommentForm = () => {
  const postId = useQueryId();
  const { mutate: addCommentMutate } = useAddComment(postId);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const { data: userData } = useGetUserInfo();

  const isLogin = !!userData;

  const submitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentRef.current) return;
    if (!isLogin) return toast.error(MESSAGE.LOGIN_NEEDED);
    if (commentRef.current.value === "") return toast.error(MESSAGE.COMMENT_CONTENT_NEEDED);

    addCommentMutate({
      postId: postId,
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
