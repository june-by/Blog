"use client";
import React, { PropsWithChildren } from "react";
import useHighLightCodeBlock from "./useHighlightCodeBlock";
import { PostType } from "@Types/post";

const HighLightCodeBlock = ({
  category,
  children,
}: PropsWithChildren<Pick<PostType, "category">>) => {
  useHighLightCodeBlock(category);
  return <>{children}</>;
};

export default HighLightCodeBlock;
