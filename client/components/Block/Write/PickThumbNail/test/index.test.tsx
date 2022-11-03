import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import PickThumbNail, { thumbnailInputAttribute } from "..";

describe("<PickThumbNail />", () => {
  const props = {
    thumbNailUrl: "/test.png",
    setThumbNailUrl: jest.fn(),
  };

  it("rendering test", () => {
    render(<PickThumbNail thumbNailUrl={props.thumbNailUrl} setThumbNailUrl={props.setThumbNailUrl} />);
    expect(screen.getByText("썸네일 설정")).toBeInTheDocument();
    expect(screen.getByAltText("썸네일")).toHaveAttribute("src", "/test.png");
  });

  it("thumbnail submit test", () => {
    render(<PickThumbNail thumbNailUrl={props.thumbNailUrl} setThumbNailUrl={props.setThumbNailUrl} />);
    fireEvent.click(screen.getByRole("button"));

    const thumbnailInput = screen.getByTestId("thumbnailInput");
    thumbnailInputAttribute.forEach(({ attr, value }) => {
      expect(thumbnailInput).toHaveAttribute(attr, value);
    });
  });
});
