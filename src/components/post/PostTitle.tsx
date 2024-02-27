import { Post } from "contentlayer/generated";
import React from "react";

const PostTitle = ({ title }: Pick<Post, "title">) => {
  return <h1 className="mb-2 break-words">{title}</h1>;
};

export default PostTitle;
