import { useWriteContext } from "context/writeContext";
import React from "react";
import styles from "./@styles.module.scss";

const TitleInput = () => {
  const {
    writeFormData: { title },
    handleChangeTitle,
  } = useWriteContext();
  return <input className={styles.titleInput} value={title} placeholder="제목" onChange={handleChangeTitle} />;
};

export default TitleInput;
