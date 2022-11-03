import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient } from "react-query";
import GoBackBtn from "..";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../../utils/test/renderWithContext";

describe("<GoBackBtn />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();

  it("rendering test", () => {
    renderWithContext(router, queryClient, <GoBackBtn />);
    expect(screen.getByText("뒤로가기")).toBeInTheDocument();
    expect(screen.getByAltText("뒤로가기")).toBeInTheDocument();
  });

  it("click event test", () => {
    renderWithContext(router, queryClient, <GoBackBtn />);
    const goBackBtn = screen.getByTestId("goBackBtn");
    fireEvent.click(goBackBtn);
    expect(router.back).toBeCalled();
  });
});
