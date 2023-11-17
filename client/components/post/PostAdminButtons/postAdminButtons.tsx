"use client";
import React from "react";
import styles from "./styles.module.scss";
import { PostType } from "@Types/post";
import { usePathname } from "next/navigation";
import { useDeletePostMutation, useDeleteSnippetMutation } from "@hooks/query";
import Link from "next/link";
import { MESSAGE } from "@constants";

const PostAdminButtons = ({ id }: Pick<PostType, "id">) => {
  const pathname = usePathname();

  const { mutate: deleteSnippet } = useDeleteSnippetMutation();
  const { mutate: deletePost } = useDeletePostMutation();

  const deleteMutation = pathname.includes("snippets")
    ? deleteSnippet
    : deletePost;

  const editPath = pathname.includes("snippets") ? "/snippets/write" : "/write";

  const handleClickDelete = () => {
    if (!window.confirm(MESSAGE.CONFIRM_DELETE)) {
      return;
    }
    deleteMutation({ id });
  };

  return (
    <div className={styles.PostAdminButtons}>
      <button onClick={handleClickDelete} className={styles.deleteButton}>
        삭제
      </button>
      <Link href={`${editPath}?mode=edit&id=${id}`} className={styles.editLink}>
        수정
      </Link>
    </div>
  );
};

export default PostAdminButtons;
