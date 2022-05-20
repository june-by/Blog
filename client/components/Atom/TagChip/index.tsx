import React, { useCallback } from "react";
import styles from "./styles.module.scss";

interface Props {
  tag: string;
  setTagArr: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagChip = ({ tag, setTagArr }: Props) => {
  const deleteTag = useCallback(() => {
    setTagArr((prev) => prev.filter((value) => value !== tag));
  }, [tag, setTagArr]);

  return (
    <div className={styles.TagChip}>
      <span>{tag}</span>
      <button onClick={deleteTag}>X</button>
    </div>
  );
};

export default TagChip;
