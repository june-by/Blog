import { useRouter } from "next/navigation";
import React from "react";
import styles from "./styles.module.scss";
import WithAdminValidation from "@components/shared/WithAdminValidation";

const WriteButton = () => {
  const { push } = useRouter();

  return (
    <WithAdminValidation>
      <button
        type="button"
        onClick={() => {
          push("/write");
        }}
        className={styles.writeButton}
      >
        새 글 작성
      </button>
    </WithAdminValidation>
  );
};

export default WriteButton;
