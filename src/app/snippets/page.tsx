import { SITE_BASE_URL, STTE_TITLE } from "@/constants";
import { groupBy } from "@/utils";
import { allSnippets } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const SNIPPET_PAGE_DESCRIPTION = "개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다.";

export const metadata: Metadata = {
  title: `Snippets | ${STTE_TITLE}`,
  description: SNIPPET_PAGE_DESCRIPTION,
  openGraph: {
    title: `Snippets | ${STTE_TITLE}`,
    description: SNIPPET_PAGE_DESCRIPTION,
    url: `${SITE_BASE_URL}/snippets`,
    images: ["/profile.png"],
  },
};

const SnippetListPage = () => {
  const snippetsListGroupByCategory = groupBy(allSnippets, "category");

  return (
    <div className="flex flex-col gap-4 mt-4">
      {Object.entries(snippetsListGroupByCategory).map(([category, snippetList]) => (
        <div key={category} className="w-full">
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            {category} ({snippetList.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {snippetList.map((snippet) => (
              <Link
                href={snippet.slug}
                key={snippet.title}
                className="rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 text-ellipsis whitespace-nowrap overflow-hidden"
              >
                {snippet.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnippetListPage;
