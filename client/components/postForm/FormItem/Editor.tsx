import React, { LegacyRef, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import ReactQuill from "react-quill";
import { customAxios } from "utils/CustomAxios";
import Script from "next/script";
import "highlight.js/styles/atom-one-dark.css";
import { useWriteContext } from "context/writeContext";
import { PostFormItemSharedType } from "./type";

interface EditorProps {
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
    const TempEditor = ({ forwardedRef, ...props }: EditorProps) => {
      return <RQ ref={forwardedRef} {...props} />;
    };
    return TempEditor;
  },
  { ssr: false }
);

const Editor = <T extends Record<string, any>>({
  setState,
  value,
  stateKey,
}: PostFormItemSharedType<T>) => {
  const QuillRef = useRef<ReactQuill>(null);

  const handleChangeEditorContent = (editorContent: string) => {
    setState((prev) => {
      return {
        ...prev,
        [stateKey]: editorContent,
      };
    });
  };

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
        highlight: (text: string) => hljs.highlightAuto(text).value,
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
          value={value}
          onChange={handleChangeEditorContent}
          modules={modules}
          formats={formats}
          theme="snow"
        />
      </div>
    </>
  );
};

export default Editor;

const formats = [
  "header",
  "font",
  "color",
  "background",
  "code",
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

const containerConfig = [
  [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
  [{ size: [] }],
  [{ color: [] }, { background: [] }],
  [
    "bold",
    "italic",
    "underline",
    "strike",
    "code",
    "blockquote",
    "color",
    "background",
    "code-block",
  ],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video"],
  ["clean"],
];
