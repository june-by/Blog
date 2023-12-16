import { Post } from "contentlayer/generated";
import React from "react";

interface HeadingType {
  text: string;
  slug: string;
  level: number;
}

const TableOfContents = ({ headings }: Pick<Post, "headings">) => {
  return (
    <aside className="absolute left-full top-0 hidden h-full break-words 2xl:inline-block">
      <ul className="sticky top-10 ml-12 w-[calc(49vw-500px)] space-y-1.5 border-l-2 pl-5 transition-colors dark:border-gray-700">
        {headings.map(({ text, slug, level }: HeadingType) => (
          <li key={text} className="list-none my-0.5">
            <a
              className={`text-sm no-underline text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 inline-block transition-all hover:underline ${
                level >= 1 ? `pl-${level * 2}` : ""
              }`}
              data-level={level}
              href={`#${slug}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
