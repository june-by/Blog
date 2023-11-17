"use client";

import React from "react";
import { revalidateSnippet } from "@utils";
import { SnippetsCategory, MESSAGE } from "@constants";
import { SnippetFormType, SnippetType } from "@Types";
import { useAddSnippetMutation, useEditSnippetMutation } from "@hooks/query";
import { toast } from "react-toastify";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg, Input, Selector, Editor } from "@components/shared/Form";
interface Props {
  mode: "write" | "edit";
  id: number;
  snippetData: null | SnippetType;
}

const SnippetWriteForm = ({ mode, id, snippetData }: Props) => {
  const { mutateAsync: addSnippetMutate } = useAddSnippetMutation();
  const { mutateAsync: editSnippetMutate } = useEditSnippetMutation({
    snippetId: id,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SnippetFormType>({
    defaultValues: {
      ...snippetData,
    },
  });

  const onSubmit: SubmitHandler<SnippetFormType> = (data) => {
    const mutateAsync = {
      write: addSnippetMutate,
      edit: editSnippetMutate,
    };

    toast.promise(mutateAsync[mode](data), MESSAGE.FORM_MUTATION_MESSAGE[mode]);

    revalidateSnippet(id);
  };

  return (
    <form>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        제출
      </button>
      <Input
        label="제목"
        {...register("title", { required: MESSAGE.NEED_TITLE })}
      />
      {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
      <Selector
        label="카테고리"
        {...register("category")}
        options={SnippetsCategory.map((category) => {
          return { key: category, value: category, text: category };
        })}
      />
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <Editor
            value={field.value}
            onChange={(content: string) => field.onChange(content)}
          />
        )}
      />
    </form>
  );
};

export default SnippetWriteForm;
