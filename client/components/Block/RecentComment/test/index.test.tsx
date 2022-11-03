import { render, screen } from "@testing-library/react";
import React from "react";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { QueryClient, QueryClientProvider } from "react-query";
import RecentComment from "..";

describe("<RecentComment />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    render(
      <RouterContext.Provider value={router}>
        <QueryClientProvider client={queryClient}>
          <RecentComment />
        </QueryClientProvider>
      </RouterContext.Provider>
    );
    expect(await screen.findByText(`최근 댓글`)).toBeInTheDocument();
    //TODO: Comment Length test
  });
});
