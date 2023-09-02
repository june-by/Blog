import { GetServerSideProps } from "next";
import React from "react";
import { customAxios } from "utils/CustomAxios";
import https from "https";
import IsAdmin from "utils/isAdmin";
import WriteForm from "components/write";
import { SnippetsCategory } from "constants/category";

const SnippetWritePage = () => {
  return (
    <WriteForm>
      <>
        <WriteForm.Title />
        <WriteForm.CategorySelector catagoryCandidate={SnippetsCategory} />
        <WriteForm.Editor />
        <WriteForm.SubmitButton />
      </>
    </WriteForm>
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
