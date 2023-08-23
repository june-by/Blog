import React from "react";
import Head from "next/head";
import ArchivesPageContainer from "components/archives/Archives";

const Archives = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Archives | Byjuun.com</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="모든 기록물을 모아놓은 페이지입니다."
        />
        <meta property="og:title" content="Archives | Byjuun.com" />
        <meta
          property="og:description"
          content="모든 기록물을 모아놓은 페이지입니다."
        />
        <meta
          property="og:image"
          content={
            "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
          }
        />
        <meta property="og:url" content="https://byjuun.com/archives" />
      </Head>
      <ArchivesPageContainer />
    </>
  );
};

export default Archives;
