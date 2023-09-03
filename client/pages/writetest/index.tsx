import PostForm from "components/postForm";
import SeriesSelector from "components/postForm/SeriesSelector";
import { Category } from "constants/category";
import styles from "./styles.module.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useQueryId from "Hooks/useQueryId";
import { useGetPostQuery } from "Hooks/Post";
import { PostFormType } from "Types/post";
import usePostForm from "components/postForm/usePostForm";

const Writetest = () => {
  const { query: { mode } = { mode: "write" } } = useRouter();
  const id = useQueryId();

  const { data } = useGetPostQuery(id, {
    enabled: isNaN(id) ? false : true,
  });

  const { formState, setFormState, formItemProps, syncFormDataAndState } =
    usePostForm<PostFormType>({
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

  useEffect(() => {
    if (mode !== "edit") return;
    if (!data) return;

    const { mainPost: postData } = data;
    syncFormDataAndState({
      ...postData,
      tagArr: postData.Tags.map((tag) => String(tag?.content)),
    });
  }, [data, mode, setFormState, syncFormDataAndState]);

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
      <SeriesSelector {...formItemProps("SeriesId")} />
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
