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
  it("rendering test", () => {
    renderWithContext(router, queryClient, <PostCard post={defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(dateForm(defaultProps.createdAt))).toBeInTheDocument();
    expect(screen.getByText(`조회수 : ${defaultProps.views}`)).toBeInTheDocument();
  });

  it("click test", () => {
    renderWithContext(router, queryClient, <PostCard post={defaultProps} />);

    const postCard = screen.getByTestId("postCard");
  });
});
