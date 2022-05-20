import React, { useEffect } from "react";
import hljs from "highlight.js";
import Head from "next/head";

const PostContent = ({ content }: { content: string }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-light.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
      </Head>
      <div className="Code" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default PostContent;
