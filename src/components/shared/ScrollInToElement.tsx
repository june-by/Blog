"use client";

import React, { useCallback } from "react";

interface Props {
  when: boolean;
  children: JSX.Element;
  scrollOptions?: Parameters<Element["scrollIntoView"]>[0];
}

const ScrollInToElement = ({ children, when, scrollOptions }: Props) => {
  const child = React.Children.only(children);

  const scrollIntoElement = useCallback(
    (node: Element | null) => {
      if (node === null) {
        return;
      }
      if (when) {
        node.scrollIntoView(scrollOptions);
      }
    },
    [scrollOptions, when]
  );

  return React.cloneElement(child, {
    ref: scrollIntoElement,
  });
};

export default ScrollInToElement;
