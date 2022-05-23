import React, { LegacyRef, useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import Head from "next/head";
import ReactQuill from "react-quill";
import { customAxios } from "../../../../utils/CustomAxios";

interface Props {
  forwardedRef: LegacyRef<ReactQuill> | undefined;
  value: string;
  onChange: (e: string) => void;
  modules: any;
  formats: string[];
  theme: string;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return React.forwardRef(({ forwardedRef, ...props }: Props) => {
      return <RQ ref={forwardedRef} {...props} />;
    });
  },
  { ssr: false }
);

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

const PostEditor = ({ content, setContent }: { content: string; setContent: React.Dispatch<React.SetStateAction<string>> }) => {
  const QuillRef = useRef<ReactQuill>(null);
  const onChange = useCallback((e: string) => {
    setContent(e);
  }, []);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    input.click();
    input.onchange = async () => {
      const file = input.files;
      if (file !== null && QuillRef.current) {
        const formData = new FormData();
        formData.append("img", file[0]);
        const res = await customAxios.post("/uploads", formData);
        console.log(res);
        const img_url = res.data.url;
        const editor = QuillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(Number(range?.index), "image", img_url);
      }
    };
  };

  const modules = useMemo(
    () => ({
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["code-block", "bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      },
    }),
    []
  );
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-light.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
      </Head>
      <div className={styles.Editor}>
        <QuillNoSSRWrapper forwardedRef={QuillRef} value={content} onChange={onChange} modules={modules} formats={formats} theme="snow" />
      </div>
    </>
  );
};

export default PostEditor;
