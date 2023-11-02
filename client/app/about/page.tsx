import { Metadata } from "next";
import React from "react";
import { NotionAPI } from "notion-client";
import PageTitle from "@components/shared/PageTitle";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";
import "react-notion-x/src/styles.css";
import NotionPage from "@components/NotionPage";
import * as notion from "notion-types";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About | Byjuun.com",
    description: "📄 개인이력서",
    openGraph: {
      title: "About | Byjuun.com",
      description: "📄 개인이력서",
      url: "https://byjuun.com/about",
      images: [
        "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
      ],
    },
  };
}

const AboutPage = async () => {
  const recordMap = await getNotionRecordMap();

  if (!recordMap) {
    return <NotFoundPageIndicator text="오류가 발생했습니다." />;
  }

  return (
    <>
      <PageTitle title="📄 About" description="🧑‍💻 개인이력서입니다." />
      <ScrollToTopButton />
      <NotionPage recordMap={recordMap} />
    </>
  );
};

async function getNotionRecordMap() {
  try {
    const res = await fetch("http://localhost:3001/about/api", {
      cache: "force-cache",
    });

    const recordMap: notion.ExtendedRecordMap = await res.json();
    return recordMap;
  } catch (err) {
    return null;
  }
}

export default AboutPage;
