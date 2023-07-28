import React from "react";
import styles from "./@styles.module.scss";
import { useWriteContext } from "context/writeContext";

const ShortDescription = () => {
  const {
    writeFormData: { shortDescription },
    handleChangeShortDescription,
  } = useWriteContext();
  return (
    <div className={styles.ShortDescription}>
      <label>짧은설명</label>
      <input value={shortDescription} onChange={handleChangeShortDescription} />
    </div>
  );
};

export default ShortDescription;
