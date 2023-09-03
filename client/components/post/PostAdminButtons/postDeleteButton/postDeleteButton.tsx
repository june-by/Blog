import React from "react";
import { useDeletePost } from "Hooks/Post";
import styles from "./styles.module.scss";
import useQueryId from "Hooks/useQueryId";

const PostDeleteButton = () => {
  const postId = useQueryId();
  const deleteMutation = useDeletePost();

  const deletePost = () => {
    if (!window.confirm("* 정말 삭제하시겠습니까?")) return;
    deleteMutation.mutate(postId);
  };

  return (
    <button data-testid="postDelBtn" className={styles.DeleteBtn} onClick={deletePost}>
      글 삭제하기
    </button>
  );
};

export default React.memo(PostDeleteButton);
