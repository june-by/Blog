import WriteForm from "components/write";
import React from "react";
import { GetServerSideProps } from "next";
import { customAxios } from "utils/CustomAxios";
import https from "https";
import IsAdmin from "utils/isAdmin";
import styles from "./styles.module.scss";

const Write = () => {
  return (
    <WriteForm>
      <div>
        <div className={styles.titleArea}>
          <WriteForm.Title />
          <WriteForm.IsPublicCheckBox />
          <WriteForm.SubmitButton />
        </div>
        <div className={styles.etcArea}>
          <WriteForm.CategorySelector />
          <div className={styles.tagWrap}>
            <WriteForm.TagInput />
            <WriteForm.TagList />
          </div>
        </div>
        <WriteForm.SeriesSelector />
        <WriteForm.ShortDescription />
        <WriteForm.Editor />
        <WriteForm.ThumbNailPicker />
      </div>
    </WriteForm>
  );
};
export default Write;

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
