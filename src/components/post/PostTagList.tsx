import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import { AiFillTag } from "react-icons/ai";

const PostTagList = ({ tags }: Pick<Post, "tags">) => {
  if (!tags) return null;

  return (
    <ul className="flex gap-1 pl-0 my-0 flex-wrap">
      {tags.map((tag, idx) => (
        <Link
          href={{
            pathname: "/",
            query: { tag },
          }}
          key={`${tag}${idx}`}
          className="cursor-pointer flex items-center gap-1 hover:text-blue-700 no-underline"
        >
          <AiFillTag className="text-blue-700 mt-0" />
          <span className="text-sm mb-0 whitespace-nowrap">{tag}</span>
        </Link>
      ))}
    </ul>
  );
};

export default PostTagList;
