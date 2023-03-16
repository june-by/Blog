import { screen } from "@testing-library/react";
import DUMMY from "constants/dummy";
import { QueryClient } from "react-query";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";
import PostViewCount from ".";

describe("<PostViewCount />", () => {
  const router = createMockRouter({ query: { id: "1" } });
  const queryClient = new QueryClient();

  it("rendering test", async () => {
    renderWithContext(router, queryClient, <PostViewCount />);

    expect(
      await screen.findByText(`조회수 : ${DUMMY.POST_VIEW_COUNT + 1}`)
    ).toBeInTheDocument();
  });
});
