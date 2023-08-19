import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";
import WithAdminValidation from "components/shared/WithAdminValidation";

const WriteButton = () => {
  const { push } = useRouter();

  const gotoWrite = () => {
    push({
      pathname: "/Write",
      query: { mode: "Write" },
    });
  };

  return (
    <WithAdminValidation>
      <button type="button" onClick={gotoWrite} className={styles.writeButton}>
        새 글 작성
      </button>
    </WithAdminValidation>
  );
};

export default WriteButton;
