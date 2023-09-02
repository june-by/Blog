import React from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import useHighLightCodeBlock from "./useHighlightCodeBlock";
import { usePostContext } from "context/postContext";
import classnames from "classnames";

const PostContent = () => {
  const { category, content } = usePostContext();

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
