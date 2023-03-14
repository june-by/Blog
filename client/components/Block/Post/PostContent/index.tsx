import React from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import useGetTopics from "./useGetTopics";
import TableOfContents from "components/Block/Post/TableOfContents";
import useHighLightCodeBlock from "./useHighlightCodeBlock";

interface Props {
  content: string;
  category: string;
}

const PostContent = ({ content, category }: Props) => {
  const { tableOfContents, loading } = useGetTopics();

  useHighLightCodeBlock(category);

  return (
    <section className={styles.PostContent}>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <article className={`Code ${styles.Content}`} dangerouslySetInnerHTML={{ __html: content }} />
      {!loading && <TableOfContents tableOfContents={tableOfContents} />}
    </section>
  );
};

export default PostContent;
