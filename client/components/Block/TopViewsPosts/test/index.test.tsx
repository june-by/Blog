import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TopViewsPosts from "..";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../../utils/test/renderWithContext";

describe("<TopViewsPosts />", () => {
  const queryClient = new QueryClient();
  const router = createMockRouter();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <TopViewsPosts />);
    expect(await screen.findByText("조회수 Top10")).toBeInTheDocument();
    for (let idx = 0; idx < 10; idx++) {
      expect(await screen.findByTestId(`${idx}post`)).toBeInTheDocument();
    }
  });
});
