import React, { createElement } from "react";
import { Concert_One } from "next/font/google";

const MainFont = Concert_One({
  weight: "400",
  subsets: [],
});

interface Props extends React.HTMLAttributes<HTMLAllCollection> {
  tagName: string;
}

const FontAppliedElement = ({ tagName = "div", ...props }: Props) => {
  return createElement(tagName, { className: MainFont.className, ...props });
};

export default FontAppliedElement;
