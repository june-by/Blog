import { getCategories } from "@/utils";
import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

interface Props {
  posts: Post[];
  currentCategory?: Post["category"];
}

const Categories = ({ posts, currentCategory }: Props) => {
  const categories = getCategories(posts);

  return (
    <div className="pb-2 flex gap-1 overflow-x-scroll scrollbar scrollbar-h-0.5 scrollbar-thumb-blue-500 scrollbar-track-gray-100">
      {categories.map(({ text, count }) => (
        <Link
          className={`flex gap-1 text-[13px] rounded p-2  whitespace-nowrap ${
            currentCategory === text
              ? "bg-neutral-600"
              : "bg-neutral-200 dark:bg-neutral-800"
          }`}
          key={text}
          href={{
            pathname: "/",
            query: { category: text },
          }}
        >
          <span className="font-normal">{text}</span>
          <span className="shadow-sm border-[0.031rem] rounded w-5 h-5 text-blue-500 text-center bg-white">
            {count}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
