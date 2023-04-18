import React, { useCallback, useRef } from "react";
import useInitializeTagContent from "./useInitializeTagContent";
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

  const deleteTag = (tag: string) => () => {
    setTagArr((prev) => prev.filter((value) => value !== tag));
  };

  useInitializeTagContent(tagArr, tagRef);

  return (
    <div className={styles.Tag}>
      <form data-testid="tagSubmitForm" onSubmit={onSubmitTag}>
        <input ref={tagRef} placeholder="Tag" />
      </form>
      <div className={styles.TagArrWrapper}>
        {tagArr?.length !== 0 &&
          tagArr.map((tag, idx) => {
            return (
              <div className={styles.TagChip} key={tag}>
                <span>{tag}</span>
                <button onClick={deleteTag(tag)}>X</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tag;
