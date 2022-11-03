import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryChip from "..";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { QueryClient } from "react-query";
import { renderWithContext } from "../../../../utils/test/renderWithContext";

describe("<CategoryChip />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("length가 있는 CategoryChip 렌더링 테스트", () => {
    const props = {
      category: "테스트카테고리",
      length: 11,
    };
    renderWithContext(router, queryClient, <CategoryChip category={props.category} length={props.length} />);

    expect(screen.getByText(props.category)).toBeInTheDocument();
    expect(screen.getByText(props.length)).toBeInTheDocument();
  });

  it("length가 없는 CategoryChip 렌더링 테스트", () => {
    const props = {
      category: "테스트카테고리",
    };
    renderWithContext(router, queryClient, <CategoryChip category={props.category} />);
    expect(screen.getByText(props.category)).toBeInTheDocument();
    expect(screen.getByText(0)).toBeInTheDocument();
  });

  it("length가 있고, mode가 post인 CategoryChip 렌더링 테스트", async () => {
    const props = {
      category: "테스트카테고리",
      length: 10,
      mode: "post",
    };
    renderWithContext(router, queryClient, <CategoryChip category={props.category} mode={props.mode} length={props.length} />);

    expect(screen.getByText(props.category)).toBeInTheDocument();
    expect(screen.queryByText(props.length)).not.toBeInTheDocument();
  });

  it("CategoryChip 클릭 이벤트 테스트", async () => {
    const props = {
      category: "testCategory",
      length: 10,
    };
    renderWithContext(router, queryClient, <CategoryChip category={props.category} length={props.length} />);

    const categroyChipBtn = screen.getByRole("button");
    expect(categroyChipBtn).toBeInTheDocument();
    fireEvent.click(categroyChipBtn);
    expect(router.push).toHaveBeenCalledWith({ pathname: "/filter", query: { category: props.category, page: 1 } });
  });
});
