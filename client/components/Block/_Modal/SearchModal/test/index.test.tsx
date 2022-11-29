import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchModal from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<LoginModal />", () => {
  const props = {
    setOpen: jest.fn(),
  };
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", () => {
    renderWithContext(
      router,
      queryClient,
      <SearchModal setOpen={props.setOpen} />
    );

    expect(screen.getByText("게시글 찾기")).toBeInTheDocument();
    expect(screen.getByTestId("searchInput")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "검색" })).toBeInTheDocument();
  });

  it("modalClose test", () => {
    renderWithContext(
      router,
      queryClient,
      <SearchModal setOpen={props.setOpen} />
    );

    const closeBtn = screen.getByTestId("searchCloseBtn");
    fireEvent.click(closeBtn);
    expect(props.setOpen).toBeCalled();
  });

  it("submit test", () => {
    renderWithContext(
      router,
      queryClient,
      <SearchModal setOpen={props.setOpen} />
    );

    const searchKeyword = "test";
    const searchInput = screen.getByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: "검색" });
    fireEvent.change(searchInput, { target: { value: searchKeyword } });
    fireEvent.click(searchBtn);
    expect(router.push).toBeCalledWith({
      pathname: "/filter",
      query: { search: searchKeyword },
    });
  });
});
