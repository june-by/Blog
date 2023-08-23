import React from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import TableOfContents from "components/post/TableOfContents";
import useHighLightCodeBlock from "./useHighlightCodeBlock";
import { usePostContext } from "context/postContext";
import useExtractTOC from "./useExtractTOC";
import SeriesInfo from "../SeriesInfo";

const PostContent = () => {
  const {
    Post: { category, content, title: postTitle },
  } = usePostContext();

  const { tableOfContents, isExtractComplete } = useExtractTOC({ postTitle });

  useHighLightCodeBlock(category);

  return (
    <section className={styles.PostContent}>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <div className={styles.ContentWrap}>
        <SeriesInfo />
        <article
          className={`Code ${styles.Content}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      {isExtractComplete && (
        <TableOfContents tableOfContents={tableOfContents} />
      )}
    </section>
  );
};

export default PostContent;
