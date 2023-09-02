import { CATEGORY_TO_HLJS_CLASS, CategoryType } from "constants/category";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function useHighLightCodeBlock(category: string) {
  useEffect(() => {
    handleCodeBlock(category);
    hljs.configure({
      ignoreUnescapedHTML: true,
    });
    hljs.highlightAll();
  }, [category]);
}

function handleCodeBlock(category: string) {
  const $preList = document.getElementsByTagName(
    "pre"
  ) as unknown as HTMLPreElement[];
  for (const $pre of $preList) {
    const $code = makeCodeNode($pre.innerHTML, category);
    replaceChildNode($pre, $code);
  }
}

function makeCodeNode(innerHTML: string, category: string) {
  const $code = document.createElement("code");
  $code.innerHTML = innerHTML;

  const highlightLanguage = CATEGORY_TO_HLJS_CLASS[category as CategoryType];
  $code.className = highlightLanguage ? `language-${highlightLanguage}` : "";
  return $code;
}

function replaceChildNode(parent: HTMLElement, child: HTMLElement) {
  parent.innerHTML = "";
  parent.appendChild(child);
}
