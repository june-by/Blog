import React, { useCallback, useRef, useState } from "react";
import { Category } from "../../utils/category";
import styles from "./styles.module.scss";
import CategorySelectInWrite from "../../components/Block/Write/CategorySelect";
import Tag from "../../components/Block/Write/Tag";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import { useAddPost, useEditPost } from "../../Hooks/Post";
const PostEditor = dynamic(() => import("../../components/Block/Write/PostEditor"), { ssr: false });
import dynamic from "next/dynamic";
import useSetEditData from "../../Hooks/useSetEditData";
import { useRouter } from "next/router";

const Write = () => {
  const { query } = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const [categoryInfo, setCategoryInfo] = useState(Category[0]);
  const [content, setContent] = useState<string>("");
  const [tagArr, setTagArr] = useState<Array<string>>([]);

  const AddPostMutation = useAddPost();
  const EditPostMutation = useEditPost();

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
    if (query.mode === "Write") AddPostMutation.mutate(reqData);
    else EditPostMutation.mutate(reqData);
  }, [categoryInfo, tagArr, content, AddPostMutation, EditPostMutation]);

  useCheckAdmin();
  useSetEditData({ titleRef: titleRef, setCategoryInfo: setCategoryInfo, setContent: setContent, setTagArr: setTagArr });

  return (
    <div className={styles.Write}>
      <div className={styles.titleArea}>
        <input className={styles.titleInput} placeholder="제목" ref={titleRef} />
        <button onClick={submitPost}>등록</button>
      </div>
      <div className={styles.etcArea}>
        <CategorySelectInWrite onChangeCategory={onChangeCategory} />
        <Tag tagArr={tagArr} setTagArr={setTagArr} />
      </div>
      <PostEditor content={content} setContent={setContent} />
    </div>
  );
};

export default Write;
