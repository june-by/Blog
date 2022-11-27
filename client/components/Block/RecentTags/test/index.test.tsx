import { screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import RecentTags from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<RecentTags />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <RecentTags />);

    expect(await screen.findByText(`최근 태그`)).toBeInTheDocument();
    expect(await screen.findAllByTestId(`tagIcon`)).toHaveLength(15);
    for (let idx = 0; idx < 15; idx++) {
      expect(
        await screen.findByText(`testRecentTag${idx}`)
      ).toBeInTheDocument();
    }
  });
});
