import { useWriteContext } from "context/writeContext";
import React from "react";
import styles from "./@styles.module.scss";

const IsPublicCheckBox = () => {
  const {
    writeFormData: { isPublic },
    onChangeIsPublic,
  } = useWriteContext();
  return (
    <div className={styles.isPublicCheckBox}>
      <span>공개</span>
      <input onChange={onChangeIsPublic} type="checkbox" checked={Boolean(isPublic)} />
    </div>
  );
};

export default IsPublicCheckBox;
