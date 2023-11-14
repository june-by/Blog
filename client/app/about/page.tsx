import { Metadata } from "next";
import React from "react";
import PageTitle from "@components/shared/PageTitle";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";
import "react-notion-x/src/styles.css";
import NotionPage from "@components/NotionPage";
import * as notion from "notion-types";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";
import { createMetaData } from "@utils";

export async function generateMetadata(): Promise<Metadata> {
  return createMetaData({
    title: "About | Byjuun.com",
    description: "📄 개인이력서",
    ogUrl: "https://byjuun.com/about",
  });
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
    // const recordMap = await request<notion.ExtendedRecordMap>({
    //   url: "/about/api",
    //   cache: "force-cache",
    //   method: "get",
    // });
    const res = await fetch("https://byjuun.com/about/api", {
      cache: "force-cache",
    });

    const recordMap: notion.ExtendedRecordMap = await res.json();

    return recordMap;
  } catch (err) {
    return null;
  }
}

export default AboutPage;
