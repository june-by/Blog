import React, { createElement } from "react";
import { Concert_One } from "next/font/google";

const MainFont = Concert_One({
  weight: "400",
  subsets: [],
});

interface Props extends React.HTMLAttributes<HTMLAllCollection> {
  tagName?: string;
  className?: string;
}

const FontAppliedElement = ({
  tagName = "div",
  className = "",
  ...props
}: Props) => {
  return createElement(tagName, {
    className: `${MainFont.className} ${className}`,
    ...props,
  });
};

export default FontAppliedElement;
