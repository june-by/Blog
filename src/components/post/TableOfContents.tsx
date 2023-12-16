import { Post } from "contentlayer/generated";
import React from "react";

const TableOfContents = ({ headings }: Pick<Post, "headings">) => {
  return (
    <aside className="absolute left-full top-0 hidden h-full break-words 2xl:inline-block">
      {headings.map(
        (heading: { text: string; slug: string; level: number }) => (
          <a
            key={heading.text}
            className="data-[level=two]:pl-2 data-[level=three]:pl-4"
            data-level={heading.level}
            href={`#${heading.slug}`}
          >
            {heading.text}
          </a>
        )
      )}
    </aside>
  );
};

export default TableOfContents;
