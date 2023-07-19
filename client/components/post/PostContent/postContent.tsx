import React from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import useGetTopics from "./useGetTopics";
import TableOfContents from "components/post/TableOfContents";
import useHighLightCodeBlock from "./useHighlightCodeBlock";
import { usePostContext } from "context/postContext";

const PostContent = () => {
  const {
    Post: { category, content, title: postTitle },
  } = usePostContext();

  const { tableOfContents, loading } = useGetTopics({ postTitle });

  useHighLightCodeBlock(category);

  return (
    <section className={styles.PostContent}>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <article
        className={`Code ${styles.Content}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {!loading && <TableOfContents tableOfContents={tableOfContents} />}
    </section>
  );
};

export default PostContent;
