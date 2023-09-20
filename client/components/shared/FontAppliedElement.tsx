import React, { createElement, type HTMLAttributes } from "react";
import { Jua } from "next/font/google";

const Font = Jua({
  weight: "400",
  subsets: [],
});

interface Props extends HTMLAttributes<HTMLAllCollection> {
  tagName?: string;
  className?: string;
}

const FontAppliedElement = ({
  tagName = "div",
  className = "",
  ...props
}: Props) => {
  return createElement(tagName, {
    className: `${Font.className} ${className}`,
    ...props,
  });
};

export default FontAppliedElement;
