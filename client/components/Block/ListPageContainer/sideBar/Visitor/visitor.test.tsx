import { screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import Visitor from ".";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<Visitor />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <Visitor />);

    expect(await screen.findByTestId("totalVisitor")).toBeInTheDocument();
    expect(await screen.findByTestId("todayVisitor")).toBeInTheDocument();
    // expect(await screen.findByText(`100`)).toBeInTheDocument();
    // expect(await screen.findByText(`10`)).toBeInTheDocument();
  });
});
