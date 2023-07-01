import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import CategoryChip from "./categoryChip";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<CategoryChip />", () => {
  const router = createMockRouter();
  it("length가 있는 CategoryChip 렌더링 테스트", () => {
    const props = {
      category: "테스트카테고리",
      length: 11,
    };
    renderWithContext(<CategoryChip category={props.category} length={props.length} />);

    expect(screen.getByText(props.category)).toBeInTheDocument();
    expect(screen.getByText(props.length)).toBeInTheDocument();
  });

  it("length가 없는 CategoryChip 렌더링 테스트", () => {
    const props = {
      category: "테스트카테고리",
    };
    renderWithContext(<CategoryChip category={props.category} />);
    expect(screen.getByText(props.category)).toBeInTheDocument();
  });

  it("CategoryChip을 클릭하면, Router.push가 적절한 매게변수와 함께 호출되어야 한다.", async () => {
    const props = {
      category: "testCategory",
      length: 10,
    };
    renderWithContext(<CategoryChip category={props.category} length={props.length} />, router);

    const categroyChipBtn = screen.getByTestId("categoryChip");
    expect(categroyChipBtn).toHaveAttribute("href", `/?category=${props.category}`);
  });
});
