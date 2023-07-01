import { screen } from "@testing-library/react";
import React from "react";
import PostCard from "./postCard";
import dateForm from "utils/dateForm";
import DUMMY from "constants/dummy";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostCard />", () => {
  const defaultProps = DUMMY.POST.mainPost;

  it("rendering test", async () => {
    renderWithContext(<PostCard post={defaultProps} />);

    expect(await screen.findByText(defaultProps.title)).toBeInTheDocument();
    expect(await screen.findByText(dateForm(defaultProps.createdAt))).toBeInTheDocument();
    expect(await screen.findByText(`조회수 : ${defaultProps.views}`)).toBeInTheDocument();
  });

  it("각각의 PostCard는 옳바른 Link를 가지고 있어야 한다.", async () => {
    renderWithContext(<PostCard post={defaultProps} />);

    const postCard = await screen.findByTestId("postCard");
    expect(postCard).toHaveAttribute("href", `/post/${defaultProps.id}`);
  });
});
