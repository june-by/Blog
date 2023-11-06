import { PostType } from "@Types/post";
import React from "react";
import HighLightCodeBlock from "./HighLightCodeBlock";
import PostContent from "./PostContent";

const PostContentWrap = ({
  category,
  content,
}: Pick<PostType, "category" | "content">) => {
  return (
    <HighLightCodeBlock category={category}>
      <PostContent content={content} />
    </HighLightCodeBlock>
  );
};

export default PostContentWrap;
