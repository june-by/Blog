import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import RecentTags from "..";

describe("<RecentTags />", () => {
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecentTags />
      </QueryClientProvider>
    );
    expect(await screen.findByText(`최근 태그`)).toBeInTheDocument();
    expect(await screen.findAllByTestId(`tagIcon`)).toHaveLength(15);
  });
});
