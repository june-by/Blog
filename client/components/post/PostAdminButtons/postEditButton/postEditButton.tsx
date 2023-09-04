import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";
import { PostType } from "Types/post";

const PostEditBtn = ({ id }: Pick<PostType, "id">) => {
  const { push, pathname } = useRouter();

  const gotoEdit = () => {
    const editPagePathName = pathname.includes("snippets")
      ? "/snippets/write"
      : "/write";

    push({
      pathname: editPagePathName,
      query: { mode: "edit", id: id },
    });
  };

  return (
    <button
      data-testid="postEditBtn"
      className={styles.editButton}
      onClick={gotoEdit}
    >
      글 수정하기
    </button>
  );
};

export default React.memo(PostEditBtn);
