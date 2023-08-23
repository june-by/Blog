import React from "react";
import Head from "next/head";
import ScrollButton from "components/shared/scrollButton";
import SeriesPageContainer from "components/series";

const Series = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Series | Byjuun.com</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="시리즈 목록" />
        <meta property="og:title" content="Series | Byjuun.com" />
        <meta property="og:description" content="시리즈 목록" />
        <meta
          property="og:image"
          content={
            "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
          }
        />
        <meta property="og:url" content="https://byjuun.com/series" />
      </Head>
      <SeriesPageContainer />
      <ScrollButton />
    </>
  );
};

export default Series;
