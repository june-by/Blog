import { useWriteContext } from "context/writeContext";
import React from "react";
import styles from "./@styles.module.scss";

const TitleInput = () => {
  const {
    writeSubmitData: { title },
    onChangeTextData,
  } = useWriteContext();
  return (
    <input className={styles.titleInput} name="title" value={title} placeholder="제목" onChange={onChangeTextData} />
  );
};

export default TitleInput;
