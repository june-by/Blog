import { useWriteContext } from "context/writeContext";
import React from "react";
import styles from "./@styles.module.scss";

const TagList = () => {
  const {
    writeFormData: { tagArr },
    removeTag,
  } = useWriteContext();

  if (tagArr?.length === 0) return null;

  return (
    <div className={styles.tagListWrap}>
      {tagArr.map((tag) => (
        <div className={styles.TagChip} key={tag}>
          <span>{tag}</span>
          <button onClick={() => removeTag(tag)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TagList;
