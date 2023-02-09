import React, { useEffect } from "react";
import hljs from "highlight.js";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import useGetTopics from "./useGetTopics";
import useAddClassName from "./useAddClassName";
import TableOfContents from "components/Block/Post/TableOfContents";

const PostContent = ({ content }: { content: string }) => {
  const { tableOfContents, loading } = useGetTopics();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useAddClassName("pre", " hljs");

  return (
    <section className={styles.PostContent}>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <article className={`Code ${styles.Content}`} dangerouslySetInnerHTML={{ __html: content }} />
      {!loading && <TableOfContents tableOfContents={tableOfContents} />}
    </section>
  );
};

export default PostContent;
