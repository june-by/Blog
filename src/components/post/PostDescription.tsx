import { getDarkThemeClass } from "@/utils";
import { Post } from "contentlayer/generated";
import React from "react";

const PostDescription = ({ description }: Pick<Post, "description">) => {
  if (!description) return null;

  return (
    <p className={`text-base opacity-60 mt-0 mb-1 text-slate-700 ${getDarkThemeClass("text-slate-200")}`}>
      {description}
    </p>
  );
};

export default PostDescription;
