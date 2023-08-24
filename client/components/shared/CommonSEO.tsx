import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const CommonSEO = ({
  title = "Byjuun.com",
  description = "Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻",
  ogTitle,
  ogDescription,
  ogImage = "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
  ogUrl = `https://byjuun.com`,
}: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
    </Head>
  );
};

export default CommonSEO;
