import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Tag from ".";

describe("<Tag />", () => {
  const props = {
    tagArr: ["test1", "test2"],
    setTagArr: jest.fn(),
  };

  it("rendering test", () => {
    render(<Tag {...props} />);
    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  it("submit test", () => {
    render(<Tag {...props} />);
    const form = screen.getByTestId("tagSubmitForm");
    fireEvent.submit(form);
    expect(props.setTagArr).toBeCalled();
  });
});
