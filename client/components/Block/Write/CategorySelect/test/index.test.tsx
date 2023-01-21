import { fireEvent, render, screen } from "@testing-library/react";
import Category from "constants/category";
import React from "react";
import CategorySelectInWrite from "..";

describe("<CategorySelectInWrite/>", () => {
  const props = {
    categoryInfo: "JavaScript",
    onChangeCategory: jest.fn(),
  };

  it("rendering test", () => {
    render(<CategorySelectInWrite categoryInfo={props.categoryInfo} onChangeCategory={props.onChangeCategory} />);

    Category.forEach((category) => {
      expect(screen.getByRole("option", { name: category })).toBeInTheDocument();
    });
    const categorySelectInWrite = screen.getByTestId("categorySelectInWrite");
    expect(categorySelectInWrite).toBeInTheDocument();
  });

  it("onChange test", () => {
    render(<CategorySelectInWrite categoryInfo={props.categoryInfo} onChangeCategory={props.onChangeCategory} />);
    const categorySelectInWrite = screen.getByTestId("categorySelectInWrite");
    fireEvent.change(categorySelectInWrite);
    expect(props.onChangeCategory).toBeCalled();
  });
});
