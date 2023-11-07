"use client";

import React, { useEffect } from "react";
import { omit, revalidateSnippet } from "@utils";
import { SnippetsCategory, MESSAGE } from "@constants";
import usePostForm from "@components/postForm/usePostForm";
import { SnippetFormType, SnippetType } from "@Types";
import PostForm from "@components/postForm/postForm";
import { useAddSnippetMutation, useEditSnippetMutation } from "@hooks/query";
import { toast } from "react-toastify";

interface Props {
  mode: "write" | "edit";
  id: number;
  snippetData: null | SnippetType;
}

const snippetFormInitialData = {
  title: "",
  category: "",
  content: "",
};

const SnippetWriteForm = ({ mode, id, snippetData }: Props) => {
  const { mutateAsync: addSnippetMutate } = useAddSnippetMutation();
  const { mutateAsync: editSnippetMutate } = useEditSnippetMutation({
    snippetId: id,
  });

  const {
    formState,
    formItemProps,
    syncFormDataAndState,
    verifyNonNullableInFormState,
  } = usePostForm<SnippetFormType>(snippetFormInitialData);

  const handleSubmitSnippet = () => {
    const notEnteredKey = verifyNonNullableInFormState();
    if (notEnteredKey) {
      return toast.warn(`${notEnteredKey}를 입력해주세요.`);
    }

    const mutateAsync = {
      write: addSnippetMutate,
      edit: editSnippetMutate,
    };

    toast.promise(
      mutateAsync[mode](formState),
      MESSAGE.FORM_MUTATION_MESSAGE[mode]
    );

    revalidateSnippet(id);
  };

  useEffect(() => {
    if (!snippetData) {
      return;
    }
    syncFormDataAndState({ ...omit(snippetData, "id", "createdAt") });
  }, [snippetData, syncFormDataAndState]);

  return (
    <PostForm>
      <PostForm.SubmitButton handleSubmit={handleSubmitSnippet} />
      <PostForm.TextInput {...formItemProps("title")} label="제목" />
      <PostForm.Selector
        {...formItemProps("category")}
        label="카테고리"
        options={SnippetsCategory.map((category) => {
          return { key: category, value: category, text: category };
        })}
      />
      <PostForm.Editor {...formItemProps("content")} />
    </PostForm>
  );
};

export default SnippetWriteForm;
