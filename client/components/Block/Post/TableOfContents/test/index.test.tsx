import { render, screen } from "@testing-library/react";
import React from "react";
import TableOfContents from "..";

describe("<TableOfContents />", () => {
  const getBoundingClientRect = () => {
    return { top: 1 };
  };
  const topicArr = Array.from({ length: 10 }, (_, idx) => {
    return { innerText: `test${idx}`, getBoundingClientRect };
  });

  it("rendering test", () => {
    render(<TableOfContents topicArr={topicArr as HTMLElement[]} />);
    topicArr.forEach((topic) => {
      expect(screen.getByText(topic.innerText)).toBeInTheDocument();
    });
  });
});
