import { CATEGORY_TO_HLJS_CLASS, CategoryType } from "constants/category";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function useHighLightCodeBlock(category: CategoryType) {
  useEffect(() => {
    handleCodeBlock(category);
    hljs.configure({
      ignoreUnescapedHTML: true,
    });
    hljs.highlightAll();
  }, []);
}

function handleCodeBlock(category: CategoryType) {
  const $preList = document.getElementsByTagName("pre") as unknown as HTMLPreElement[];
  for (const $pre of $preList) {
    const $code = makeCodeNode($pre.innerHTML, category);
    replaceChildNode($pre, $code);
  }
}

function makeCodeNode(innerHTML: string, category: CategoryType) {
  const $code = document.createElement("code");
  $code.innerHTML = innerHTML;

  const highlightLanguage = CATEGORY_TO_HLJS_CLASS[category];
  $code.className = highlightLanguage ? `language-${highlightLanguage}` : "";
  return $code;
}

function replaceChildNode(parent: HTMLElement, child: HTMLElement) {
  parent.innerHTML = "";
  parent.appendChild(child);
}
