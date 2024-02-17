import React, { HTMLAttributes } from "react";

interface Props<T extends HTMLElement> extends HTMLAttributes<T> {
  tagName?: string;
  alignItems?: "center" | "end" | "start";
  justifyContents?: "center" | "end" | "start";
}

const getAlignItemsClassName = <T extends HTMLElement>(type: Props<T>["alignItems"]) => {
  switch (type) {
    case "center":
      return "items-center";
    case "end":
      return "items-end";
    case "start":
      return "items-start";
    default:
      return "";
  }
};

const getJustifyContentsClassName = <T extends HTMLElement>(type: Props<T>["justifyContents"]) => {
  switch (type) {
    case "center":
      return "justify-center";
    case "end":
      return "justify-end";
    case "start":
      return "justify-start";
    default:
      return "";
  }
};

const Flex = <T extends HTMLElement>({ tagName = "div", alignItems, justifyContents, ...props }: Props<T>) => {
  return React.createElement(tagName, {
    ...props,
    className: `${props?.className} flex ${getJustifyContentsClassName(justifyContents)} ${getAlignItemsClassName(
      alignItems
    )}`,
  });
};

export default Flex;
