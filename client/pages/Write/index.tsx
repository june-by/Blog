import PostForm from "components/postForm";
import SeriesSelector from "components/postForm/SeriesSelector";
import { Category } from "constants/category";
import styles from "./styles.module.scss";
import https from "https";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useQueryId from "Hooks/useQueryId";
import { useAddPost, useEditPost, useGetPostQuery } from "Hooks/Post";
import { PostFormType } from "Types/post";
import usePostForm from "components/postForm/usePostForm";
import MESSAGE from "constants/message";
import { toast } from "react-toastify";
import { GetServerSideProps } from "next";
import { customAxios } from "utils/CustomAxios";
import IsAdmin from "utils/isAdmin";

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

const WritePage = () => {
  const { query: { mode } = { mode: "write" } } = useRouter();
  const id = useQueryId();

  const AddPostMutation = useAddPost();
  const EditPostMutation = useEditPost({ postId: id });

  const { data } = useGetPostQuery(id, {
    enabled: isNaN(id) ? false : true,
  });

  const { formState, setFormState, formItemProps, syncFormDataAndState } =
    usePostForm<PostFormType>(postFormInitialData);

  const handleSubmitPost = () => {
    const mutation = mode === "write" ? AddPostMutation : EditPostMutation;
    const mutationPromiseMessage =
      MESSAGE.FORM_MUTATION_MESSAGE[mode as "write" | "edit"];

    const mutatiotPromise = mutation.mutateAsync(formState);
    toast.promise(mutatiotPromise, mutationPromiseMessage);
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

export default WritePage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const Cookies = req?.headers?.cookie ?? "";

  customAxios.defaults.headers.Cookie = Cookies;

  try {
    const { data: userInfo } = await customAxios.get("/user", {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
      }),
    });

    if (!IsAdmin(userInfo)) {
      return {
        notFound: true,
      };
    }

    return {
      props: {},
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
