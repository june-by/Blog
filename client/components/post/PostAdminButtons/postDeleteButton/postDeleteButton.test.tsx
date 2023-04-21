import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import PostDeleteButton from "./postDeleteButton";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostDelBtn />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", () => {
    renderWithContext(router, queryClient, <PostDeleteButton />);

    expect(screen.getByTestId("postDelBtn")).toBeInTheDocument();
    expect(screen.getByText("글 삭제하기")).toBeInTheDocument();
  });
  it("click test", () => {
    renderWithContext(router, queryClient, <PostDeleteButton />);

    const postDelBtn = screen.getByTestId("postDelBtn");
    const confirmMock = jest.spyOn(window, "confirm").mockImplementation();

    fireEvent.click(postDelBtn);
    expect(confirmMock).toHaveBeenCalledTimes(1);
    expect(confirmMock).toHaveBeenCalledWith("* 정말 삭제하시겠습니까?");
  });
});
