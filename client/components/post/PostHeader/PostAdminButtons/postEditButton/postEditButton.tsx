import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

const PostEditBtn = ({ id }: { id: number }) => {
  const router = useRouter();

  const gotoEdit = () => {
    router.push({
      pathname: "/Write",
      query: { mode: "Edit", id: id },
    });
  };

  return (
    <button data-testid="postEditBtn" className={styles.editButton} onClick={gotoEdit}>
      글 수정하기
    </button>
  );
};

export default React.memo(PostEditBtn);
