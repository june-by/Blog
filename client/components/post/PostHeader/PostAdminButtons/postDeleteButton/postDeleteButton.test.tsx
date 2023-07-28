import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import PostDeleteButton from "./postDeleteButton";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostDelBtn />", () => {
  it("rendering test", () => {
    renderWithContext(<PostDeleteButton />);

    expect(screen.getByTestId("postDelBtn")).toBeInTheDocument();
    expect(screen.getByText("글 삭제하기")).toBeInTheDocument();
  });
  it("삭제 버튼을 눌렀을 때, confirm창이 나타나야 한다.", () => {
    renderWithContext(<PostDeleteButton />);

    const postDelBtn = screen.getByTestId("postDelBtn");
    const confirmMock = jest.spyOn(window, "confirm").mockImplementation();

    fireEvent.click(postDelBtn);
    expect(confirmMock).toHaveBeenCalledTimes(1);
    expect(confirmMock).toHaveBeenCalledWith("* 정말 삭제하시겠습니까?");
  });
});
