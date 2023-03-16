import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TagChip from ".";

describe("<TagChip />", () => {
  const props = {
    tag: "testTag",
    setTagArr: jest.fn(),
  };

  it("rendering test", () => {
    render(<TagChip tag={props.tag} setTagArr={props.setTagArr} />);
    expect(screen.getByText(props.tag)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "X" })).toBeInTheDocument();
  });

  it("click test", () => {
    render(<TagChip tag={props.tag} setTagArr={props.setTagArr} />);
    fireEvent.click(screen.getByRole("button", { name: "X" }));
    expect(props.setTagArr).toHaveBeenCalled();
  });
});
