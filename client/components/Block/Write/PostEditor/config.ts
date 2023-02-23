import ReactQuill, { Quill } from "react-quill";
import hljs from "highlight.js";

const BlockEmbed = Quill.import("blots/block/embed");

export const formats = [
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

export const containerConfig = [
  [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
  [{ size: [] }],
  [{ color: [] }, { background: [] }],
  ["bold", "italic", "underline", "strike", "code", "blockquote", "color", "background", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video"],
  ["clean"],
];
