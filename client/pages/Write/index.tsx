import React, { useCallback, useRef, useState } from "react";
import { Category } from "../../utils/category";
import styles from "./styles.module.scss";
import CategorySelectInWrite from "../../components/block/Write/CategorySelect";
import Tag from "../../components/block/Write/Tag";
import useCheckAdmin from "../../hooks/useCheckAdmin";
import { useAddPost, useEditPost } from "../../hooks/Post";
const PostEditor = dynamic(() => import("../../components/block/Write/PostEditor"), { ssr: false });
import dynamic from "next/dynamic";
import useSetEditData from "../../hooks/useSetEditData";
import { useRouter } from "next/router";
import PickThumbNail from "../../components/block/Write/PickThumbNail";

const Write = () => {
  const { query } = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const [categoryInfo, setCategoryInfo] = useState(Category[0]);
  const [content, setContent] = useState<string>("");
  const [tagArr, setTagArr] = useState<Array<string>>([]);
  const [thumbNailUrl, setThumbNailUrl] = useState<string | null>(null);

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
      content,
      tagArr,
      thumbNailUrl,
    };
    if (query.mode === "Write") AddPostMutation.mutate(reqData);
    else EditPostMutation.mutate(reqData);
  }, [categoryInfo, tagArr, content, AddPostMutation, EditPostMutation, thumbNailUrl, query.mode]);

  //useCheckAdmin();
  useSetEditData({ titleRef, setCategoryInfo, setContent, setTagArr, setThumbNailUrl });

  return (
    <div className={styles.Write}>
      <div className={styles.titleArea}>
        <input className={styles.titleInput} placeholder="제목" ref={titleRef} />
        <button onClick={submitPost}>등록</button>
      </div>
      <div className={styles.etcArea}>
        <CategorySelectInWrite categoryInfo={categoryInfo} onChangeCategory={onChangeCategory} />
        <Tag tagArr={tagArr} setTagArr={setTagArr} />
      </div>
      <PostEditor content={content} setContent={setContent} />
      <PickThumbNail thumbNailUrl={thumbNailUrl} setThumbNailUrl={setThumbNailUrl} />
    </div>
  );
};

export default Write;
