import PostForm from "components/postForm";
import SeriesSelector from "components/postForm/SeriesSelector";
import { Category } from "constants/category";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import createFormItemProps from "components/postForm/FormItem/createFormItemProps";

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

  const formItemProps = createFormItemProps({
    state: formState,
    setState: setFormState,
  });

  const handleSubmitPost = () => {
    console.log(formState);
  };
  console.log(formState);

  return (
    <PostForm>
      <div className={styles.FlexItems}>
        <PostForm.CheckBox {...formItemProps("isPublic")} label="공개/비공개" />
        <PostForm.SubmitButton handleSubmit={handleSubmitPost} />
      </div>
      <PostForm.TextInput {...formItemProps("title")} label="제목" />
      <PostForm.Selector
        {...formItemProps("category")}
        label="카테고리"
        options={Category.map((category) => {
          return { key: category, value: category, text: category };
        })}
      />
      <PostForm.ListForm {...formItemProps("tagArr")} label="태그" />
      <SeriesSelector setState={setFormState} />
      <PostForm.TextInput
        {...formItemProps("shortDescription")}
        label="짧은설명"
      />
      <PostForm.Editor {...formItemProps("content")} />
      <PostForm.ImageUploader {...formItemProps("thumbNailUrl")} />
    </PostForm>
  );
};

export default Writetest;
