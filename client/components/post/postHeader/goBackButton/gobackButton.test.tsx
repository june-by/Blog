import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";
import GoBackButton from "./GoBackButton";

describe("<GoBackButton />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();

  it("rendering test", () => {
    renderWithContext(router, queryClient, <GoBackButton />);
    expect(screen.getByText("뒤로가기")).toBeInTheDocument();
  });

  it("click event test", () => {
    renderWithContext(router, queryClient, <GoBackButton />);
    const goBackButton = screen.getByTestId("GoBackButton");
    fireEvent.click(goBackButton);
    expect(router.back).toBeCalled();
  });
});
