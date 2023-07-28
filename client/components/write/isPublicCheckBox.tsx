import { useWriteContext } from "context/writeContext";
import React from "react";
import styles from "./@styles.module.scss";

const IsPublicCheckBox = () => {
  const {
    writeFormData: { isPublic },
    handleChangeIsPublic,
  } = useWriteContext();
  return (
    <div className={styles.isPublicCheckBox}>
      <span>공개</span>
      <input onChange={handleChangeIsPublic} type="checkbox" checked={Boolean(isPublic)} />
    </div>
  );
};

export default IsPublicCheckBox;
