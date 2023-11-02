"use client";

import React, { useEffect } from "react";
import { omit } from "@utils";
import { SnippetsCategory, MESSAGE } from "@constants";
import { useSearchParams } from "next/navigation";
import { useQueryId } from "@hooks";
import usePostForm from "@components/postForm/usePostForm";
import { SnippetFormType } from "@Types";
import PostForm from "@components/postForm/postForm";
import {
  useAddSnippetMutation,
  useEditSnippetMutation,
  useGetSnippetQuery,
} from "@hooks/query";
import { toast } from "react-toastify";

const snippetFormInitialData = {
  title: "",
  category: "",
  content: "",
};

const SnippetWriteForm = () => {
  const searchParams = useSearchParams();
  const mode = (searchParams?.get("mode") || "write") as "write" | "edit";

  const id = useQueryId();

  const { data } = useGetSnippetQuery({ id });

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
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    syncFormDataAndState({ ...omit(data, "id", "createdAt") });
  }, [data, syncFormDataAndState]);

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
