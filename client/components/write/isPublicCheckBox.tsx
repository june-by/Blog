import { useWriteContext } from "context/writeContext";
import React from "react";
import styles from "./@styles.module.scss";

const IsPublicCheckBox = () => {
  const {
    writeSubmitData: { isPublic },
    onChangeCheckBox,
  } = useWriteContext();
  return (
    <div className={styles.isPublicCheckBox}>
      <span>공개</span>
      <input name="isPublic" onChange={onChangeCheckBox} type="checkbox" checked={Boolean(isPublic)} />
    </div>
  );
};

export default IsPublicCheckBox;
