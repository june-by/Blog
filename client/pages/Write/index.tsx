import React, { useCallback, useRef, useState } from "react";
import { Category } from "../../utils/category";
import styles from "./styles.module.scss";
import Editor from "../../components/Block/Write/Editor";
import CategorySelectInWrite from "../../components/Block/Write/CategorySelect";

const Write = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [categoryInfo, setCategoryInfo] = useState(Category[0]);
  const [content, setContent] = useState<string>("");

  const onChangeCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  }, []);

  return (
    <div className={styles.Write}>
      <input className={styles.titleInput} placeholder="제목" ref={titleRef} />
      <CategorySelectInWrite onChangeCategory={onChangeCategory} />
      <Editor content={content} setContent={setContent} />
      <div className={styles.submitBtn}>
        <button>등록</button>
      </div>
    </div>
  );
};

export default Write;
