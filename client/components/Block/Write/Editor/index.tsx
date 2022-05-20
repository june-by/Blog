import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import Head from "next/head";
import ReactQuill from "react-quill";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["code-block", "bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "code-block",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const Editor = ({ content, setContent }: { content: string; setContent: React.Dispatch<React.SetStateAction<string>> }) => {
  const onChange = useCallback((e: string) => {
    setContent(e);
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-light.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
      </Head>
      <div className={styles.Editor}>
        <QuillNoSSRWrapper value={content} onChange={onChange} modules={modules} formats={formats} theme="snow" />
      </div>
    </>
  );
};

export default Editor;
