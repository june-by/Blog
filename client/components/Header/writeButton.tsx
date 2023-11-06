import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const WriteButton = () => {
  return (
    <Link href="/write" className={styles.writeButton}>
      새 글 작성
    </Link>
  );
};

export default WriteButton;
