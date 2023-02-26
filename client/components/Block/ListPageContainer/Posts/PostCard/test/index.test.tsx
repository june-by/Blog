import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import PostCard from "..";
import dateForm from "utils/dateForm";
import { DummyPost } from "constants/dummy";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostCard />", () => {
  const defaultProps = DummyPost.mainPost;
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <PostCard post={defaultProps} />);

    expect(await screen.findByText(defaultProps.title)).toBeInTheDocument();
    expect(await screen.findByText(dateForm(defaultProps.createdAt))).toBeInTheDocument();
    expect(await screen.findByText(`조회수 : ${defaultProps.views}`)).toBeInTheDocument();
  });

  it("click test", async () => {
    renderWithContext(router, queryClient, <PostCard post={defaultProps} />);

    const postCard = await screen.findByTestId("postCard");
    expect(postCard).toHaveAttribute("href", `/post/${defaultProps.id}`);
  });
});
