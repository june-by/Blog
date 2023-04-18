import { screen } from "@testing-library/react";
import React from "react";
import { createMockRouter } from "utils/test/createMockRouter";
import { QueryClient } from "react-query";
import RecentComment from ".";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<RecentComment />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <RecentComment />);

    expect(await screen.findByText(`최근 댓글`)).toBeInTheDocument();
    for (let idx = 0; idx < 10; idx++) {
      expect(await screen.findByText(`testComment${idx}`)).toBeInTheDocument();
    }
  });
});
