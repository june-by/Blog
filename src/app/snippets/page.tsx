import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { Snippet, allSnippets } from "contentlayer/generated";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Snippets | Byjuun.com",
    description: "개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다.",
    openGraph: {
      title: "Snippets | Byjuun.com",
      description: "개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다.",
      url: `https://byjuun.com/snippets`,
      images: ["/profile.png"],
    },
  };
}

const SnippetListPage = () => {
  const allCategories = Array.from(new Set(allSnippets.map(({ category }) => category))).sort();

  const snippetsListGroupByCategory: Record<string, Snippet[]> = allCategories.reduce(
    (acc, cur) => ({ ...acc, [cur]: allSnippets.filter(({ category }) => category === cur) }),
    {}
  );

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        {Object.entries(snippetsListGroupByCategory).map(([category, snippetList]) => (
          <div key={category}>
            <h1>{category}</h1>
            {snippetList.map((snippet) => (
              <div key={snippet.title}>{snippet.title}</div>
            ))}
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default SnippetListPage;
