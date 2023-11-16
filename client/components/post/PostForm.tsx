"use client";

import { AllSeriesAPIType, PostFormType, PostPageDataType } from "@Types";
import { useAddPost, useEditPost } from "@hooks/query";
import React from "react";
import {
  useForm,
  type SubmitHandler,
  Controller,
  useFieldArray,
} from "react-hook-form";
import styles from "./styles.module.scss";
import { Category, MESSAGE } from "@constants";
import { Selector } from "@components/shared/Form";
import SeriesCreateModalOpenButton from "@components/postForm/SeriesSelector/SeriesCreateModalOpenButton";
import Editor from "@components/postForm/FormItem/Editor";
import PostFormImageUploader from "@components/postForm/FormItem/ImageUploader";
import { toast } from "react-toastify";
import { revalidatePost, revalidateSeries } from "@utils";

interface Props {
  mode: "write" | "edit";
  id: number;
  postData: null | PostPageDataType["mainPost"];
  seriesList: AllSeriesAPIType | null;
}

const PostForm = ({ mode, id, postData, seriesList }: Props) => {
  const { mutateAsync: addPostMutate } = useAddPost();
  const { mutateAsync: editPostMutate } = useEditPost({ postId: id });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostFormType>({
    defaultValues: {
      ...postData,
      tagArr: postData?.Tags.map((tag) => {
        return { value: tag?.content.toString() };
      }),
    },
  });

  const {
    fields: tagArr,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "tagArr",
  });

  const onSubmit: SubmitHandler<PostFormType> = (data) => {
    const mutateAsync = {
      write: addPostMutate,
      edit: editPostMutate,
    };

    toast.promise(mutateAsync[mode](data), MESSAGE.FORM_MUTATION_MESSAGE[mode]);

    revalidatePost(id);
    if (data.SeriesId) revalidateSeries();
  };

  return (
    <form>
      <div className={styles.FlexItems}>
        <div className={styles.DivWithLabel}>
          <label>공개/비공개</label>
          <Controller
            name="isPublic"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.checked))}
              />
            )}
          />
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          생성
        </button>
      </div>
      <input {...register("title", { required: "제목을 입력해주세요." })} />
      {errors.title && <span>{errors.title.message}</span>}
      <div className={styles.FlexItems}>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Selector
              label="카테고리"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              options={Category.map((category) => {
                return {
                  key: category,
                  value: category,
                  text: category,
                };
              })}
            />
          )}
        />
        {tagArr.map((tag, idx) => (
          <div key={tag.id}>
            <input {...register(`tagArr.${idx}.value`)} />
            <button onClick={() => remove(idx)}>x</button>
          </div>
        ))}
        <button type="button" onClick={() => append({ value: "" })}>
          +
        </button>
      </div>
      <div className={styles.FlexItems}>
        <Controller
          name="SeriesId"
          control={control}
          render={({ field }) => (
            <Selector
              label="시리즈"
              value={field.value}
              onChange={(e) => field.onChange(Number(e.target.value))}
              options={seriesList?.map(({ title, id }) => {
                return {
                  text: title,
                  value: Number(id),
                  key: title,
                };
              })}
            />
          )}
        />
        <SeriesCreateModalOpenButton />
      </div>
      <label>짧은 설명</label>
      <input {...register("shortDescription")} />
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
      <Controller
        name="thumbNailUrl"
        control={control}
        render={({ field }) => (
          <PostFormImageUploader
            value={field.value}
            onChange={(imgUrl: string) => field.onChange(imgUrl)}
          />
        )}
      />
    </form>
  );
};

export default PostForm;
