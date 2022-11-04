import { screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import CategorySelect from "..";
import { Category } from "../../../../utils/category";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../../utils/test/renderWithContext";

describe("<CategorySelect />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <CategorySelect />);
    for (const category of Category) {
      expect(await screen.findByText(category)).toBeInTheDocument();
    }
  });
});
