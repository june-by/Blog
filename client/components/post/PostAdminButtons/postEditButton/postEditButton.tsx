import { usePathname, useRouter } from "next/navigation";
import React, { memo } from "react";
import styles from "./styles.module.scss";
import { PostType } from "@Types";

const PostEditBtn = ({ id }: Pick<PostType, "id">) => {
  const { push } = useRouter();
  const pathname = usePathname();

  const gotoEdit = () => {
    const editPagePathName = pathname?.includes("snippets")
      ? "/snippets/write"
      : "/write";

    push(`${editPagePathName}?mode=edit&id=${id}`);
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

export default memo(PostEditBtn);
