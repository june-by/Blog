import React, { HTMLAttributes } from "react";

interface Props<T extends HTMLElement> extends HTMLAttributes<T> {
  tagName?: string;
}

const FlexWithCenter = <T extends HTMLElement>({
  tagName = "div",
  ...props
}: Props<T>) => {
  return React.createElement(tagName, {
    ...props,
    className: `${props?.className} flex justify-center items-center`,
  });
};

export default FlexWithCenter;
