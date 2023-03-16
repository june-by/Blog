import { screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import OtherPostInfo from ".";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<OtherPostInfo />", () => {
  const router = createMockRouter({ query: { id: "1" } });
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <OtherPostInfo />);
    expect(await screen.findByText(`"testCategory" 카테고리의 다른 게시글`));
    expect(await screen.findByText(`prevTestPost`));
    expect(await screen.findByText(`nextTestPost`));
  });
});
