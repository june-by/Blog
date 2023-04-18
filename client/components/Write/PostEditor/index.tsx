import React, { LegacyRef, useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import ReactQuill from "react-quill";
import { customAxios } from "utils/CustomAxios";
import Script from "next/script";
import "highlight.js/styles/atom-one-dark.css";
import { containerConfig, formats } from "./config";
import { CATEGORY_TO_HLJS_CLASS } from "constants/category";

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
    const TempEditor = React.forwardRef(({ forwardedRef, ...props }: Props, ref: any) => {
      return <RQ ref={forwardedRef} {...props} />;
    });
    //TempEditor.displayName = "TempEditor";
    return TempEditor;
  },
  { ssr: false }
);

const PostEditor = ({
  content,
  setContent,
  category,
}: {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}) => {
  const QuillRef = useRef<ReactQuill>(null);
  const onChange = useCallback(
    (e: string) => {
      setContent(e);
    },
    [setContent]
  );

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    input.style.display = "none";
    input.click();
    input.onchange = async () => {
      const file = input.files;
      if (file !== null && QuillRef.current) {
        const formData = new FormData();
        formData.append("img", file[0]);
        const res = await customAxios.post("/uploads", formData);
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
        highlight: (text: string) => hljs.highlight(text, { language: CATEGORY_TO_HLJS_CLASS[category] || "" }).value,
      },
      toolbar: {
        container: containerConfig,
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
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js" />
      <div className={styles.Editor}>
        <QuillNoSSRWrapper
          forwardedRef={QuillRef}
          value={content}
          onChange={onChange}
          modules={modules}
          formats={formats}
          theme="snow"
        />
      </div>
    </>
  );
};

export default PostEditor;