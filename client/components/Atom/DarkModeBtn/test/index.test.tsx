import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DarkModeBtn from "..";

describe("<DarkModeBtn />", () => {
  beforeEach(() => {
    jest.spyOn(React, "useContext").mockImplementation(() => ({
      setTheme: jest.fn(),
    }));
  });

  it("rendering test", () => {
    render(<DarkModeBtn />);
    expect(screen.getByText("🌜")).toBeInTheDocument();
    expect(screen.getByText("🌞")).toBeInTheDocument();
    const toggleBtn = screen.getByTestId("toggleBtn");
    expect(toggleBtn).toBeInTheDocument();
  });

  it("toggleBtn styling test", () => {
    render(<DarkModeBtn />);
    const toggleBtn = screen.getByTestId("toggleBtn");
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveStyle({ left: "27px" });

    //mode change event fire
    const DarkModeBtnWrapper = screen.getByTestId("DarkModeBtnWrapper");
    fireEvent.click(DarkModeBtnWrapper);
    expect(toggleBtn).toHaveStyle({ left: "1px" });
  });
});
