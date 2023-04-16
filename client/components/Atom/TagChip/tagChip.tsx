import React from "react";
import styles from "./styles.module.scss";

interface Props {
  tag: string;
  setTagArr: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagChip = ({ tag, setTagArr }: Props) => {
  const deleteTag = () => {
    setTagArr((prev) => prev.filter((value) => value !== tag));
  };

  return (
    <div className={styles.TagChip}>
      <span>{tag}</span>
      <button onClick={deleteTag}>X</button>
    </div>
  );
};

export default TagChip;
