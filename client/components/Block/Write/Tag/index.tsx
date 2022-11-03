import React, { useCallback, useEffect, useRef, useState } from "react";
import useInitializeTagContent from "./useInitializeTagContent";
import TagChip from "../../../atom/TagChip";
import styles from "./styles.module.scss";

interface Props {
  tagArr: Array<string>;
  setTagArr: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tag = ({ tagArr, setTagArr }: Props) => {
  const tagRef = useRef<HTMLInputElement>(null);

  const onSubmitTag = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!tagRef.current) return;
      setTagArr((prev) => [...prev, String(tagRef?.current?.value)]);
    },
    [setTagArr]
  );

  useInitializeTagContent(tagArr, tagRef);

  return (
    <div className={styles.Tag}>
      <form onSubmit={onSubmitTag}>
        <input ref={tagRef} placeholder="Tag" />
      </form>
      <div className={styles.TagArrWrapper}>
        {tagArr?.length !== 0 &&
          tagArr.map((tag, idx) => {
            return <TagChip key={idx} tag={tag} setTagArr={setTagArr} />;
          })}
      </div>
    </div>
  );
};

export default Tag;
