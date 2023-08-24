import React from "react";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import PageTitle from "components/shared/PageTitle";

const AboutPage = ({ recordMap }: any) => {
  return (
    <>
      <PageTitle title="📄 About" description="🧑‍💻 개인이력서입니다." />
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
