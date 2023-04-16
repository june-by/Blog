import { useRouter } from "next/router";
import React from "react";
import { useDeletePost } from "Hooks/Post";
import styles from "./styles.module.scss";

const PostDelBtn = () => {
  const router = useRouter();
  const deleteMutation = useDeletePost();

  const deletePost = () => {
    if (!window.confirm("* 정말 삭제하시겠습니까?")) return;
    deleteMutation.mutate(Number(router.query.id));
  };

  return (
    <button data-testid="postDelBtn" className={styles.DeleteBtn} onClick={deletePost}>
      글 삭제하기
    </button>
  );
};

export default React.memo(PostDelBtn);
