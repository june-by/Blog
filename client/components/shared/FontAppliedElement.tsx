import React, { createElement } from "react";
import { Concert_One, Jua } from "next/font/google";

const Font = Jua({
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
    className: `${Font.className} ${className}`,
    ...props,
  });
};

export default FontAppliedElement;
