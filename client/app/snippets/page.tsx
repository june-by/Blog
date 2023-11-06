import PageTitle from "@components/shared/PageTitle";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { SnippetList } from "@components/snippets";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Snippets | Byjuun.com",
    description: "개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다.",
    openGraph: {
      title: "Snippets | Byjuun.com",
      description: "개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다.",
      url: "https://byjuun.com/snippets",
      images: [
        "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png",
      ],
    },
  };
}

const SnippetPage = () => {
  return (
    <>
      <PageTitle
        title="🧑‍💻 Snippets"
        description="개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다."
      />
      <Suspense fallback={null}>
        {/* @ts-expect-error Server Component */}
        <SnippetList />
      </Suspense>
    </>
  );
};

export default SnippetPage;
