import { screen } from "@testing-library/react";
import React from "react";
import CategoryList from "./categoryList";
import { renderWithContext } from "utils/test/renderWithContext";
import { Category } from "constants/category";

describe("<CategoryList />", () => {
  it("rendering test", async () => {
    renderWithContext(<CategoryList />);
    let idx = 1;
    for (const category of Category) {
      expect(await screen.findByText(category)).toBeInTheDocument();
      expect(await screen.findByText(idx)).toBeInTheDocument();
      idx++;
    }
  });
});
