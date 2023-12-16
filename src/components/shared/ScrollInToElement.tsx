"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  when: boolean;
  children: JSX.Element;
  scrollOptions?: Parameters<Element["scrollIntoView"]>[0];
}

const ScrollInToElement = ({ children, when, scrollOptions }: Props) => {
  const child = React.Children.only(children);
  const childRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!childRef.current) {
      return;
    }
    if (when) {
      childRef.current.scrollIntoView(scrollOptions);
    }
  }, [scrollOptions, when]);

  return React.cloneElement(child, {
    ref: childRef,
  });
};

export default ScrollInToElement;
