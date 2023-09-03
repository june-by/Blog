import PostForm from "components/postForm";
import SeriesSelector from "components/postForm/SeriesSelector";
import { Category } from "constants/category";
import styles from "./styles.module.scss";
import React, { useState } from "react";

const Writetest = () => {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    content: "",
    shortDescription: "",
    isPublic: 0,
    tagArr: [],
    thumbNailUrl: "",
    SeriesId: null,
  });

  const handleSubmitPost = () => {
    console.log(formState);
  };

  return (
    <PostForm>
      <div className={styles.FlexItems}>
        <PostForm.CheckBox
          stateKey="isPublic"
          value={formState.isPublic}
          setState={setFormState}
          label="공개/비공개"
        />
        <PostForm.SubmitButton handleSubmit={handleSubmitPost} />
      </div>
      <PostForm.TextInput
        stateKey="title"
        value={formState.title}
        setState={setFormState}
        label="제목"
      />
      <PostForm.Selector
        stateKey="category"
        value={formState.category}
        setState={setFormState}
        label="카테고리"
        options={Category.map((category) => {
          return { key: category, value: category, text: category };
        })}
      />
      <PostForm.ListForm
        stateKey="tagArr"
        value={formState.tagArr}
        setState={setFormState}
        label="태그"
      />
      <SeriesSelector setState={setFormState} />
      <PostForm.TextInput
        stateKey="shortDescription"
        value={formState.shortDescription}
        setState={setFormState}
        label="짧은설명"
      />
      <PostForm.Editor
        stateKey="content"
        value={formState.content}
        setState={setFormState}
      />
      <PostForm.ImageUploader
        stateKey="thumbNailUrl"
        value={formState.thumbNailUrl}
        setState={setFormState}
      />
    </PostForm>
  );
};

export default Writetest;
