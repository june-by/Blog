"use client";

import { getNextAndPrevPostInSameCategory } from "@/utils";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import React, { type MouseEvent } from "react";
import { toast } from "react-toastify";

import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import MESSAGE from "@/constants";

const RoutePostButtons = ({ post }: { post: Post }) => {
  const { prevPost, nextPost } = getNextAndPrevPostInSameCategory(post);

  const onClickPrev = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => {
    if (!prevPost) {
      e.preventDefault();
      toast.warn(MESSAGE.NO_PREV_POST);
    }
  };

  const onClickNext = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => {
    if (!nextPost) {
      e.preventDefault();
      toast.warn(MESSAGE.NO_NEXT_POST);
    }
  };

  return (
    <div className="mt-5 flex gap-2 flex-col-reverse sm:flex-row sm:gap-[2%]">
      <Link
        onClick={onClickPrev}
        href={prevPost?.slug ?? ""}
        className="group w-full duration-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 flex items-center gap-2 no-underline sm:w-[49%]"
      >
        <IoArrowBackCircleOutline className="group-hover:animate-[boundLeft_0.5s] w-[36px] h-[36px] text-blue-500" />
        <div className="flex flex-col w-[calc(100%-3rem)]">
          <span className="opacity-60 font-semibold">이전 포스트</span>
          <span className="font-bold text-2xl overflow-hidden whitespace-nowrap break-all text-ellipsis">
            {prevPost ? prevPost.title : "이전 포스트가 존재하지 않습니다"}
          </span>
        </div>
      </Link>
      <Link
        onClick={onClickNext}
        href={nextPost?.slug ?? ""}
        className="group w-full duration-300 background bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 flex items-center justify-end gap-2 no-underline text-right sm:w-[49%] "
      >
        <div className="flex flex-col w-[calc(100%-3rem)]">
          <span className="opacity-60 font-semibold">다음 포스트</span>
          <span className="font-bold text-2xl overflow-hidden whitespace-nowrap break-all text-ellipsis">
            {nextPost ? nextPost.title : "다음 포스트가 존재하지 않습니다"}
          </span>
        </div>
        <IoArrowForwardCircleOutline className="group-hover:animate-[bounceRight_0.5s] w-[36px] h-[36px] text-blue-500" />
      </Link>
    </div>
  );
};

export default RoutePostButtons;
