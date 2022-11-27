import { screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import Post from "pages/post/[id]";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

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
