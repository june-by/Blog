import { screen, waitFor } from "@testing-library/react";
import React from "react";
import CommentList from "./commentList";
import { renderWithContext } from "utils/test/renderWithContext";
import DUMMY from "constants/dummy";

describe("<CommentList />", () => {
  it("rendering test", () => {
    renderWithContext(<CommentList />);
    waitFor(() => {
      DUMMY.COMMENTS_LIST.comments.forEach((comment) => {
        expect(screen.getByText(comment.content)).toBeInTheDocument();
        expect(screen.getByText(`${comment.User.nickname}님`)).toBeInTheDocument();
      });
    });
  });
});
