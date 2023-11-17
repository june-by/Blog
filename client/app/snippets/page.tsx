import { Metadata } from "next";
import React from "react";
import { SnippetList } from "@components/snippets";
import { createMetaData } from "@utils";

export async function generateMetadata(): Promise<Metadata> {
  return createMetaData({
    title: "Snippets | Byjuun.com",
    description: "개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다.",
    ogUrl: "https://byjuun.com/snippets",
  });
}

const SnippetPage = () => {
  return <SnippetList />;
};

export default SnippetPage;
