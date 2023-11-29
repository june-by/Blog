import { PostType } from "@Types/post";
import React from "react";
import HighLightCodeBlock from "./HighLightCodeBlock";
import PostContent from "./PostContent";
import ImageOverlayHandler from "./ImageOverlayHandler";

const PostContentWrap = ({
  category,
  content,
}: Pick<PostType, "category" | "content">) => {
  return (
    <HighLightCodeBlock category={category}>
      <ImageOverlayHandler>
        <PostContent content={content} />
      </ImageOverlayHandler>
    </HighLightCodeBlock>
  );
};

export default PostContentWrap;
