import { GetServerSideProps } from "next";
import React from "react";
import { customAxios } from "utils/CustomAxios";
import https from "https";
import IsAdmin from "utils/isAdmin";
import { SnippetsCategory } from "constants/category";
import { useRouter } from "next/router";
import useQueryId from "Hooks/useQueryId";
import usePostForm from "components/postForm/usePostForm";
import { SnippetFormType } from "Types/snippets";
import PostForm from "components/postForm/postForm";

const snippetFormInitialData = {
  title: "",
  category: "",
  content: "",
};

const SnippetWritePage = () => {
  const { query: { mode } = { mode: "write" } } = useRouter();
  const id = useQueryId();

  const { formState, setFormState, formItemProps, syncFormDataAndState } =
    usePostForm<SnippetFormType>(snippetFormInitialData);

  const handleSubmitSnippet = () => {
    console.log("formState : ", formState);
  };

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
