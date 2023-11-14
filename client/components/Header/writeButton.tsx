import { useRouter } from "next/navigation";
import React from "react";
import styles from "./styles.module.scss";

const WriteButton = () => {
  const { push } = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        push("/write");
      }}
      className={styles.writeButton}
    >
      새 글 작성
    </button>
  );
};

export default WriteButton;
