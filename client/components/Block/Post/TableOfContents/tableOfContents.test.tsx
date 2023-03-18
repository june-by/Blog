import { render, screen } from "@testing-library/react";
import React from "react";
import { MOCK_FN } from "utils/test/mockFn";
import TableOfContents from ".";

describe("<TableOfContents />", () => {
  beforeEach(() => {
    MOCK_FN.intersectionObserver();
  });

  const tableOfContents = Array.from({ length: 10 }, (_, idx) => {
    const element = document.createElement("h1");
    element.innerText = `test${idx}`;
    return element;
  });

  it("rendering test", () => {
    render(
      <TableOfContents tableOfContents={tableOfContents as HTMLElement[]} />
    );
    tableOfContents.forEach((topic) => {
      expect(screen.getByText(topic.innerText)).toBeInTheDocument();
    });
  });
});
