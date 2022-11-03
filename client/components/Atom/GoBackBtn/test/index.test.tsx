import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import GoBackBtn from "..";
import { createMockRouter } from "../../../../utils/test/createMockRouter";

describe("<GoBackBtn />", () => {
  it("rendering test", () => {
    render(<GoBackBtn />);
    expect(screen.getByText("뒤로가기")).toBeInTheDocument();
    expect(screen.getByAltText("뒤로가기")).toBeInTheDocument();
  });
  it("click event test", () => {
    const router = createMockRouter();
    render(
      <RouterContext.Provider value={router}>
        <GoBackBtn />
      </RouterContext.Provider>
    );

    const goBackBtn = screen.getByTestId("goBackBtn");
    fireEvent.click(goBackBtn);
    expect(router.back).toBeCalled();
  });
});
