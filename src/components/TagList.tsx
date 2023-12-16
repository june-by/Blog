"use client";

import { Post } from "contentlayer/generated";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillTag } from "react-icons/ai";

type Props = Pick<Post, "tags"> & {
  className?: HTMLElement["className"];
};

const TagList = ({ tags, className }: Props) => {
  const { push } = useRouter();

  const onClickTag = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    tag: string
  ) => {
    e.preventDefault();
    push(`/?tag=${tag}`);
  };

  if (!tags) {
    return null;
  }
  return (
    <ul className={`flex gap-1 pl-0 ${className}`}>
      {tags.map((tag, idx) => (
        <li
          onClick={(e) => onClickTag(e, tag)}
          key={`${tag}${idx}`}
          className="cursor-pointer flex items-center gap-1 hover:text-blue-700"
        >
          <AiFillTag className="text-blue-700 mt-0" />
          <span className="text-sm mb-0">{tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
