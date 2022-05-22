import React, { useCallback, useRef, useState } from "react";
import CategorySelectInWrite from "../../components/Block/Write/CategorySelect";
import PostEditor from "../../components/Block/Write/PostEditor";
import Tag from "../../components/Block/Write/Tag";
import { useEditPost } from "../../Hooks/Post";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import useSetEditData from "../../Hooks/useSetEditData";
import { Category } from "../../utils/category";
import styles from "./styles.module.scss";

const Edit = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [categoryInfo, setCategoryInfo] = useState(Category[0]);
  const [content, setContent] = useState<string>("");
  const [tagArr, setTagArr] = useState<Array<string>>([]);

  const editMutation = useEditPost();

  const onChangeCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInfo(e.target.value);
  }, []);

  const submitEditPost = useCallback(() => {
    console.log("ddd");
    if (!titleRef.current) return;
    const reqData = {
      title: titleRef.current.value,
      category: categoryInfo,
      content: content,
      tagArr: tagArr,
    };
    editMutation.mutate(reqData);
  }, [categoryInfo, tagArr, content]);

  useSetEditData({ titleRef: titleRef, setCategoryInfo: setCategoryInfo, setContent: setContent, setTagArr: setTagArr });
  useCheckAdmin();

  return (
    <div className={styles.Edit}>
      <input className={styles.titleInput} placeholder="제목" ref={titleRef} />
      <CategorySelectInWrite onChangeCategory={onChangeCategory} />
      <Tag tagArr={tagArr} setTagArr={setTagArr} />
      <PostEditor content={content} setContent={setContent} />
      <div className={styles.submitBtn}>
        <button onClick={submitEditPost}>수정</button>
      </div>
    </div>
  );
};

export default Edit;
