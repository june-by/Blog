import React, { useCallback, useEffect, useRef, useState } from "react";
import { Category } from "../../utils/category";
import styles from "./styles.module.scss";
import CategorySelectInWrite from "../../components/Block/Write/CategorySelect";
import { useRouter } from "next/router";
import Tag from "../../components/Block/Write/Tag";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import { useAddPost } from "../../Hooks/Post";

const PostEditor = dynamic(() => import("../../components/Block/Write/PostEditor"), { ssr: false });

import dynamic from "next/dynamic";

const Write = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const [categoryInfo, setCategoryInfo] = useState(Category[0]);
  const [content, setContent] = useState<string>("");
  const [tagArr, setTagArr] = useState<Array<string>>([]);

  const AddPostMutation = useAddPost();

  const onChangeCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  }, []);

  const submitPost = useCallback(() => {
    if (!titleRef.current) return;
    const reqData = {
      title: titleRef.current.value,
      category: categoryInfo,
      content: content,
      tagArr: tagArr,
    };
    AddPostMutation.mutate(reqData);
  }, [categoryInfo, tagArr, content]);

  useCheckAdmin();

  return (
    <div className={styles.Write}>
      <input className={styles.titleInput} placeholder="제목" ref={titleRef} />
      <CategorySelectInWrite onChangeCategory={onChangeCategory} />
      <Tag tagArr={tagArr} setTagArr={setTagArr} />
      <PostEditor content={content} setContent={setContent} />
      <div className={styles.submitBtn}>
        <button onClick={submitPost}>등록</button>
      </div>
    </div>
  );
};

export default Write;
