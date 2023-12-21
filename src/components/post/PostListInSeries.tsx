"use client";

import { getSeriesInfoWithPost } from "@/utils";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import { ImBookmark } from "react-icons/im";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useRouter } from "next/navigation";
import Collapse from "../shared/Collapse";

const PostListInSeries = ({ post }: { post: Post }) => {
  const { push } = useRouter();

  if (!post.series) {
    return null;
  }

  const { postListInSeries, currentPostIdx, prevPost, nextPost } =
    getSeriesInfoWithPost(post);

  return (
    <Collapse className="relative w-full p-4 mb-8 bg-[#f8f9fa] dark:bg-[rgb(33,33,33)]">
      <ImBookmark className="w-12 h-12 absolute top-0 right-2 text-blue-500" />
      <h2 className="m-0 mb-4 text-xl mr-7">{post.series}</h2>
      <Collapse.Content>
        <div className="flex flex-col gap-1 list-inside pl-0">
          {postListInSeries.map((post, idx) => {
            const isCurrentPost = currentPostIdx === idx;
            return (
              <Link
                key={post._id}
                className={`flex gap-2 text-base font-semibold no-underline hover:text-blue-500 ${
                  isCurrentPost && "text-blue-500"
                }`}
                href={post.slug}
              >
                <span className="italic whitespace-nowrap">{idx + 1}.</span>
                <span className="not-italic">{post.title}</span>
              </Link>
            );
          })}
        </div>
      </Collapse.Content>
      <div className="mt-6 flex justify-between">
        <Collapse.Trigger>
          {(isCollapseOpen) => (
            <button className="flex gap-2 items-center">
              {isCollapseOpen ? (
                <>
                  <IoMdArrowDropup />
                  <span>숨기기</span>
                </>
              ) : (
                <>
                  <IoMdArrowDropdown />
                  <span>더보기</span>
                </>
              )}
            </button>
          )}
        </Collapse.Trigger>
        <div className="flex items-center gap-2">
          <span className="text-xs">
            {currentPostIdx + 1}/{postListInSeries.length}
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => push(prevPost!.slug)}
              disabled={!prevPost}
              className="disabled:opacity-30 rounded-full border-[0.5px] text-blue-500 border-gray-200 dark:border-gray-700 enabled:hover:bg-blue-500 enabled:hover:border-blue-500 enabled:hover:text-white"
            >
              <MdOutlineKeyboardArrowLeft className=" w-[25px] h-[25px]" />
            </button>
            <button
              onClick={() => push(nextPost!.slug)}
              disabled={!nextPost}
              className="disabled:opacity-30 rounded-full border-[0.5px] text-blue-500 border-gray-200 dark:border-gray-700 enabled:hover:bg-blue-500 enabled:hover:border-blue-500 enabled:hover:text-white"
            >
              <MdOutlineKeyboardArrowRight className="w-[25px] h-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </Collapse>
  );
};

export default PostListInSeries;
