import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";
import WithAdmin from "components/_hoc/WithAdmin";

const WriteButton = () => {
  const { push } = useRouter();

  const gotoWrite = () => {
    push({
      pathname: "/Write",
      query: { mode: "Write" },
    });
  };

  return (
    <WithAdmin>
      <button type="button" onClick={gotoWrite} className={styles.writeButton}>
        새 글 작성
      </button>
    </WithAdmin>
  );
};

export default WriteButton;
