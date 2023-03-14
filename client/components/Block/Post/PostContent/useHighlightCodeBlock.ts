import hljs from "highlight.js";
import { useEffect } from "react";

export default function useHighLightCodeBlock(category: string) {
  useEffect(() => {
    handleCodeBlock(category);
    hljs.highlightAll();
  }, []);
}

function handleCodeBlock(category: string) {
  const $tags = document.getElementsByTagName("pre");
  for (const tag of $tags as any) {
    const $pre = document.createElement("pre");
    $pre.className += ` hljs`;
    const $code = makeCodeNode(tag.innerHTML, category);
    $pre.appendChild($code);
    tag.innerHTML = "";
    tag.appendChild($code);
  }
}

function makeCodeNode(innerHTML: string, category: string) {
  const $code = document.createElement("code");
  $code.innerHTML = innerHTML;
  $code.className = CATEGORY_TO_CLASS[category] || "";
  return $code;
}

const CATEGORY_TO_CLASS: { [key: string]: string } = {
  TypeScript: "language-typescript",
  JavaScript: "language-javascript",
  React: "language-tsx",
  Web: "language-javascript",
  NodeJs: "language-javascript",
  Algorithm: "language-javascript",
};
