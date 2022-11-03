import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styles from "./styles.module.scss";

const PostEditBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  const gotoEdit = useCallback(() => {
    router.push({
      pathname: "/Write",
      query: { mode: "Edit", id: id },
    });
  }, [router, id]);
  return (
    <button data-testid="postEditBtn" className={styles.EditBtn} onClick={gotoEdit}>
      글 수정하기
    </button>
  );
};

export default PostEditBtn;
