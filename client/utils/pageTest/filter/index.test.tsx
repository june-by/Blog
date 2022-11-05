import { screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import Filter from "../../../pages/filter";
import { createMockRouter } from "../../test/createMockRouter";
import { renderWithContext } from "../../test/renderWithContext";

describe("<Filter />", () => {
  const router = createMockRouter({ query: { category: "testCategory", page: "1" } });
  const queryClient = new QueryClient();

  it("rendering test", async () => {
    renderWithContext(router, queryClient, <Filter />);
    expect(await screen.findByRole("button", { name: "이전" }));
    expect(await screen.findByRole("button", { name: "다음" }));
    expect(await screen.findByRole("button", { name: "1" }));
    for (let i = 0; i < 16; i++) {
      expect(await screen.findByText(`testTitle${i}`)).toBeInTheDocument();
      expect(await screen.findByText(`조회수 : ${i + 1}`)).toBeInTheDocument();
    }
  });
});
