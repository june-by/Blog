import { screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import { createMockRouter } from "../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../utils/test/renderWithContext";
import Post from "../[id]";

describe("<Post />", () => {
  const router = createMockRouter({ query: { id: "1" } });
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <Post />);
    expect(await screen.findByText(`testPost`)).toBeInTheDocument();
    expect(await screen.findByText(`testCategory`)).toBeInTheDocument();
    expect(await screen.findByText(`testContent`)).toBeInTheDocument();
  });
});
