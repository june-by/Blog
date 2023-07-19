import React from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import TableOfContents from "components/post/TableOfContents";
import useHighLightCodeBlock from "./useHighlightCodeBlock";
import { usePostContext } from "context/postContext";
import TOCButton from "../TableOfContents/TOCButton";
import useExtractTOC from "./useExtractTOC";

const PostContent = () => {
  const {
    Post: { category, content, title: postTitle },
  } = usePostContext();

  const { tableOfContents, isExtractComplete } = useExtractTOC({ postTitle });

  useHighLightCodeBlock(category);

  return (
    <section className={styles.PostContent}>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <article
        className={`Code ${styles.Content}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isExtractComplete && (
        <>
          <TableOfContents tableOfContents={tableOfContents} />
          <TOCButton />
        </>
      )}
    </section>
  );
};

export default PostContent;
