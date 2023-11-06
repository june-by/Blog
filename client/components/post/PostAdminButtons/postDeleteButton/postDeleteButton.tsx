import React, { memo } from "react";
import { useDeletePostMutation } from "@hooks/query";
import styles from "./styles.module.scss";
import { useDeleteSnippetMutation } from "@hooks/query";
import { usePathname } from "next/navigation";
import { MESSAGE } from "@constants";
import { PostType } from "@Types/post";

const PostDeleteButton = ({ id }: Pick<PostType, "id">) => {
  const pathname = usePathname();
  const { mutate: deleteSnippet } = useDeleteSnippetMutation();
  const { mutate: deletePost } = useDeletePostMutation();

  const handleClickDelete = () => {
    if (!window.confirm(MESSAGE.CONFIRM_DELETE)) {
      return;
    }

    const deleteFn = pathname?.includes("snippets")
      ? deleteSnippet
      : deletePost;

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
