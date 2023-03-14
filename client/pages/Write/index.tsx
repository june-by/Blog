import React, { useCallback, useRef, useState } from "react";
import styles from "./styles.module.scss";
import CategorySelectInWrite from "components/Block/Write/CategorySelect";
import Tag from "components/Block/Write/Tag";
import { useAddPost, useEditPost } from "Hooks/Post";
import dynamic from "next/dynamic";
import useSetEditData from "Hooks/useSetEditData";
import { useRouter } from "next/router";
import PickThumbNail from "components/Block/Write/PickThumbNail";
import Category from "constants/category";
import withAdminValidation from "components/_hoc/withAdminValidation";
const PostEditor = dynamic(() => import("components/Block/Write/PostEditor"), {
  ssr: false,
});

const Write = () => {
  const { query } = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const [categoryInfo, setCategoryInfo] = useState(Category[0]);
  const [content, setContent] = useState<string>("");
  const [tagArr, setTagArr] = useState<Array<string>>([]);
  const [thumbNailUrl, setThumbNailUrl] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState<number>(0);

  const AddPostMutation = useAddPost();
  const EditPostMutation = useEditPost();

  const onChangeIsPublic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(Number(e.target.checked));
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  };

  const submitPost = () => {
    if (!titleRef.current) return;
    const reqData = {
      title: titleRef.current.value,
      category: categoryInfo,
      content,
      tagArr,
      thumbNailUrl,
      isPublic,
    };
    if (query.mode === "Write") AddPostMutation.mutate(reqData);
    else EditPostMutation.mutate(reqData);
  };

  useSetEditData({
    titleRef,
    setCategoryInfo,
    setContent,
    setTagArr,
    setThumbNailUrl,
    setIsPublic,
  });

  return (
    <div className={styles.Write}>
      <div className={styles.titleArea}>
        <input className={styles.titleInput} placeholder="제목" ref={titleRef} />
        <div className={styles.isPublicCheckBox}>
          <span>공개</span>
          <input onChange={onChangeIsPublic} type="checkbox" checked={Boolean(isPublic)} />
        </div>
        <button onClick={submitPost}>등록</button>
      </div>
      <div className={styles.etcArea}>
        <CategorySelectInWrite categoryInfo={categoryInfo} onChangeCategory={onChangeCategory} />
        <Tag tagArr={tagArr} setTagArr={setTagArr} />
      </div>
      <PostEditor content={content} setContent={setContent} category={categoryInfo} />
      <PickThumbNail thumbNailUrl={thumbNailUrl} setThumbNailUrl={setThumbNailUrl} />
    </div>
  );
};

//export default Write;

export default withAdminValidation(Write);
