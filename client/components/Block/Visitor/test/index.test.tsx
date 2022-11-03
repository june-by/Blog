import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Visitor from "..";

describe("<Visitor />", () => {
  const queryClient = new QueryClient();

  //TODO: MSW
  it("rendering test", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Visitor />
      </QueryClientProvider>
    );
    expect(await screen.findByTestId("totalVisitor")).toBeInTheDocument();
    expect(await screen.findByTestId("todayVisitor")).toBeInTheDocument();
  });
});
