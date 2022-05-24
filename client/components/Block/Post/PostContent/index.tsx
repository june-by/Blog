import React, { useEffect } from "react";
import hljs from "highlight.js";
import Script from "next/script";
import "highlight.js/styles/atom-one-dark.css";
const PostContent = ({ content }: { content: string }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    const $preTags = document.getElementsByTagName("pre");
    for (const tag of $preTags as any) {
      tag.className += " hljs";
    }
  }, []);
  return (
    <>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <div className="Code" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default PostContent;
