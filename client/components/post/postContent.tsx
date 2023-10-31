import React from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/panda-syntax-dark.css";
import useHighLightCodeBlock from "./useHighlightCodeBlock";
import classnames from "classnames";
import { PostType } from "@Types/post";

const PostContent = ({
  category,
  content,
}: Pick<PostType, "category" | "content">) => {
  useHighLightCodeBlock(category);

  return (
    <>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js" />
      <article
        className={classnames("Code", styles.PostContent)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
};

export default PostContent;
