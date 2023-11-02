import PageTitle from "@components/shared/PageTitle";
import { Metadata } from "next";
import React from "react";
import ArchiveContents from "@components/archives/Archives";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Archives | Byjuun.com",
    description: "모든 기록물을 모아놓은 페이지입니다.",
    openGraph: {
      title: "Archives | Byjuun.com",
      description: "모든 기록물을 모아놓은 페이지입니다.",
      url: "https://byjuun.com/archives",
      images: [
        "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
      ],
    },
  };
}

const ArchivePage = () => {
  return (
    <>
      <PageTitle
        title="📑 Archives"
        description="모든 기록들을 한곳에 모아놓은 페이지입니다."
      />
      <ArchiveContents />
    </>
  );
};

export default ArchivePage;
