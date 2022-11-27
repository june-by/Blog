import { render, screen } from "@testing-library/react";
import React from "react";
import CommentCard from "..";
import { dateForm } from "utils/dateForm";

describe("<CommentCard />", () => {
  it("rendering test", () => {
    const props = {
      comment: {
        User: {
          nickname: "testUser",
        },
        content: "testContent",
        createdAt: new Date(),
      },
      idx: 1,
    };
    render(<CommentCard comment={props.comment} idx={props.idx} />);
    expect(
      screen.getByText(`${props.comment.User.nickname}님`)
    ).toBeInTheDocument();
    expect(screen.getByText(props.comment.content)).toBeInTheDocument();
    expect(
      screen.getByText(dateForm(props.comment.createdAt))
    ).toBeInTheDocument();
  });
  it("borderTop styling test when idx===0", () => {
    const props = {
      comment: {
        User: {
          nickname: "testUser",
        },
        content: "testContent",
        createdAt: new Date(),
      },
      idx: 0,
    };
    render(<CommentCard comment={props.comment} idx={props.idx} />);
    expect(screen.getByTestId("CommentCard")).toHaveStyle({
      borderTop: "0,5px solid #c8c8c8",
    });
  });
});
