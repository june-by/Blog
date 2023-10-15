import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { customAxios, IsAdmin, omit } from "utils";
import https from "https";
import { SnippetsCategory } from "constants/category";
import { useRouter } from "next/router";
import useQueryId from "Hooks/useQueryId";
import usePostForm from "components/postForm/usePostForm";
import { SnippetFormType } from "Types/snippets";
import PostForm from "components/postForm/postForm";
import {
  useAddSnippetMutation,
  useEditSnippetMutation,
  useGetSnippetQuery,
} from "Hooks/Snippet";
import MESSAGE from "constants/message";
import { toast } from "react-toastify";

const snippetFormInitialData = {
  title: "",
  category: "",
  content: "",
};

const SnippetWritePage = () => {
  const { query } = useRouter();
  const mode = (query.mode ?? "write") as "write" | "edit";

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

export default SnippetWritePage;

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
