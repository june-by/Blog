"use client";

import PostForm from "@components/postForm";
import SeriesSelector from "@components/postForm/SeriesSelector";
import { Category, MESSAGE } from "@constants";
import styles from "./styles.module.scss";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useQueryId } from "@hooks";
import { useAddPost, useEditPost, useGetPostQuery } from "@hooks/query";
import { PostFormType } from "@Types";
import usePostForm from "@components/postForm/usePostForm";
import { toast } from "react-toastify";

const postFormInitialData = {
  title: "",
  category: "",
  content: "",
  shortDescription: "",
  isPublic: 0,
  tagArr: [],
  thumbNailUrl: "",
  SeriesId: null,
};

const PostWriteForm = () => {
  const searchParams = useSearchParams();
  const mode = (searchParams?.get("mode") || "write") as "write" | "edit";

  const id = useQueryId();

  const { mutateAsync: addPostMutate } = useAddPost();
  const { mutateAsync: editPostMutate } = useEditPost({ postId: id });

  const { data } = useGetPostQuery({ id });

  const {
    formState,
    formItemProps,
    syncFormDataAndState,
    verifyNonNullableInFormState,
  } = usePostForm<PostFormType>(postFormInitialData);

  const handleSubmitPost = () => {
    const notEnteredKey = verifyNonNullableInFormState({
      exclude: ["SeriesId", "thumbNailUrl", "tagArr"],
    });
    if (notEnteredKey) {
      return toast.warn(`${notEnteredKey}를 입력해주세요.`);
    }

    const mutateAsync = {
      write: addPostMutate,
      edit: editPostMutate,
    };

    toast.promise(
      mutateAsync[mode](formState),
      MESSAGE.FORM_MUTATION_MESSAGE[mode]
    );
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    const { mainPost: postData } = data;
    syncFormDataAndState({
      ...postData,
      tagArr: postData.Tags.map((tag) => String(tag?.content)),
    });
  }, [data, mode, syncFormDataAndState]);

  return (
    <PostForm>
      <div className={styles.FlexItems}>
        <PostForm.CheckBox {...formItemProps("isPublic")} label="공개/비공개" />
        <PostForm.SubmitButton handleSubmit={handleSubmitPost} />
      </div>
      <PostForm.TextInput {...formItemProps("title")} label="제목" />
      <div className={styles.FlexItems}>
        <PostForm.Selector
          {...formItemProps("category")}
          label="카테고리"
          options={Category.map((category) => {
            return { key: category, value: category, text: category };
          })}
        />
        <PostForm.ListForm {...formItemProps("tagArr")} label="태그" />
      </div>
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

export default PostWriteForm;
