import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";
import GoBackButton from "./GoBackButton";

describe("<GoBackButton />", () => {
  it("rendering test", () => {
    renderWithContext(<GoBackButton />);
    expect(screen.getByText("뒤로가기")).toBeInTheDocument();
  });

  it("click event test", () => {
    const router = createMockRouter();
    renderWithContext(<GoBackButton />, router);
    const goBackButton = screen.getByTestId("GoBackButton");
    fireEvent.click(goBackButton);
    expect(router.back).toBeCalled();
  });
});
