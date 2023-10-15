import React from "react";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import * as notion from "notion-types";
import "react-notion-x/src/styles.css";
import PageTitle from "@components/shared/PageTitle";
import CommonSEO from "@components/shared/CommonSEO";
import ScrollToTopButton from "@components/shared/ScrollToTopButton";

interface Props {
  recordMap: Awaited<notion.ExtendedRecordMap>;
}

const AboutPage = ({ recordMap }: Props) => {
  return (
    <>
      <CommonSEO title="About | Byjuun.com" description="📄 개인이력서" />
      <PageTitle title="📄 About" description="🧑‍💻 개인이력서입니다." />
      <ScrollToTopButton />
      <NotionRenderer recordMap={recordMap} />
    </>
  );
};

export async function getStaticProps() {
  const notion = new NotionAPI();
  const NOTION_PAGE_ID = "on-Website-8f7d18bbf99644dbac7129dfd252e373?pvs=4";
  const recordMap = await notion.getPage(NOTION_PAGE_ID);
  return {
    props: {
      recordMap,
    },
  };
}

export default AboutPage;
