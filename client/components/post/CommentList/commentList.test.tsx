import { screen, waitFor } from "@testing-library/react";
import React from "react";
import CommentList from "./commentList";
import { renderWithContext } from "utils/test/renderWithContext";
import { createMockRouter } from "utils/test/createMockRouter";
import { QueryClient } from "react-query";
import DUMMY from "constants/dummy";

describe("<CommentList />", () => {
  const router = createMockRouter({ query: { id: "1" } });
  const queryClient = new QueryClient();

  it("rendering test", () => {
    renderWithContext(router, queryClient, <CommentList />);
    waitFor(() => {
      DUMMY.COMMENTS_LIST.comments.forEach((comment) => {
        expect(screen.getByText(comment.content)).toBeInTheDocument();
        expect(screen.getByText(`${comment.User.nickname}님`)).toBeInTheDocument();
      });
    });
  });
});
