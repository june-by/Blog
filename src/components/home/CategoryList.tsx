import { getCategories } from "@/utils";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import ScrollInToElement from "../shared/ScrollInToElement";

interface Props {
  currentCategory?: Post["category"];
}

const CategoryList = ({ currentCategory }: Props) => {
  const categories = getCategories();

  return (
    <div className="pb-2 flex gap-1 overflow-x-scroll scrollbar scrollbar-h-1.5 scrollbar-thumb-blue-500 scrollbar-track-gray-100 dark:scrollbar-track-neutral-800">
      {categories.map(({ text, count }) => {
        const isCurrentSelectedCategory = currentCategory === text;
        return (
          <ScrollInToElement
            when={isCurrentSelectedCategory}
            key={text}
            scrollOptions={{
              block: "nearest",
              inline: "center",
            }}
          >
            <Link
              className={`flex gap-1 text-[13px] rounded p-2  whitespace-nowrap ${
                isCurrentSelectedCategory
                  ? "bg-[rgb(195,195,195)] dark:bg-neutral-600"
                  : "bg-neutral-200 dark:bg-neutral-800"
              }`}
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
          </ScrollInToElement>
        );
      })}
    </div>
  );
};

export default CategoryList;
