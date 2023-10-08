import React, { memo } from "react";
import { useDeletePostMutation } from "Hooks/Post";
import styles from "./styles.module.scss";
import useQueryId from "Hooks/useQueryId";
import { useDeleteSnippetMutation } from "Hooks/Snippet";
import { useRouter } from "next/router";
import MESSAGE from "constants/message";

const PostDeleteButton = () => {
  const id = useQueryId();
  const { pathname } = useRouter();
  const { mutate: deleteSnippet } = useDeleteSnippetMutation();
  const { mutate: deletePost } = useDeletePostMutation();

  const handleClickDelete = () => {
    if (!window.confirm(MESSAGE.CONFIRM_DELETE)) {
      return;
    }

    const deleteFn = pathname.includes("snippets") ? deleteSnippet : deletePost;

    deleteFn({ id });
  };

  return (
    <button
      data-testid="postDelBtn"
      className={styles.DeleteBtn}
      onClick={handleClickDelete}
    >
      글 삭제하기
    </button>
  );
};

export default memo(PostDeleteButton);
