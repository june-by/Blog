import React, { type LegacyRef, useMemo, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import ReactQuill from "react-quill";
import Script from "next/script";
import "highlight.js/styles/atom-one-dark.css";
import { ServerURL } from "@constants";
import useImageUpload from "@hooks/useImageUpload";

interface EditorProps {
  forwardedRef: LegacyRef<ReactQuill> | undefined;
  value: string;
  onChange: (e: string) => void;
  modules: { [key: string]: any };
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

const Editor = ({
  value,
  onChange,
}: Pick<EditorProps, "value" | "onChange">) => {
  const QuillRef = useRef<ReactQuill>(null);

  const onImageUploadSuccess = useCallback(({ url }: { url: string }) => {
    if (!QuillRef.current) {
      return;
    }

    const editor = QuillRef.current.getEditor();
    const range = editor.getSelection();
    editor.insertEmbed(Number(range?.index), "image", url);
  }, []);

  const { handleClickUploadButton } = useImageUpload({ onImageUploadSuccess });

  const modules = useMemo(
    () => ({
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
      toolbar: {
        container: containerConfig,
        handlers: { image: handleClickUploadButton },
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js" />
      <div className={styles.Editor}>
        <QuillNoSSRWrapper
          forwardedRef={QuillRef}
          value={value}
          onChange={onChange}
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
