import { render, screen } from "@testing-library/react";
import React from "react";
import CommentList from "..";
import { dateForm } from "utils/dateForm";

describe("<CommentList />", () => {
  const props = {
    Comments: [
      {
        User: { nickname: "test1" },
        content: "testContent1",
        createdAt: new Date(),
      },
      {
        User: { nickname: "test2" },
        content: "testContent2",
        createdAt: new Date(),
      },
      {
        User: { nickname: "test3" },
        content: "testContent3",
        createdAt: new Date(),
      },
    ],
  };

  it("rendering test", () => {
    render(<CommentList Comments={props.Comments} />);
    props.Comments.forEach((comment) => {
      expect(screen.getByText(comment.content)).toBeInTheDocument();
      expect(
        screen.getByText(`${comment.User.nickname}님`)
      ).toBeInTheDocument();
    });
  });
});
