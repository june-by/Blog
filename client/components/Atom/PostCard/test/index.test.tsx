import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient } from "react-query";
import PostCard from "..";
import { dateForm } from "../../../../utils/dateForm";
import { DummyPost } from "../../../../utils/dummy";
import { getThumbNail } from "../../../../utils/getThumbnail";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../../utils/test/renderWithContext";

describe("<PostCard />", () => {
  const defaultProps = DummyPost.mainPost;
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", () => {
    renderWithContext(router, queryClient, <PostCard post={defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(dateForm(defaultProps.createdAt))).toBeInTheDocument();
    expect(screen.getByText(`조회수 : ${defaultProps.views}`)).toBeInTheDocument();
    expect(screen.getByAltText("category")).toHaveAttribute("src", getThumbNail(defaultProps.category));
  });

  it("rendering test (feat, thumbNail src", () => {
    renderWithContext(router, queryClient, <PostCard post={{ ...defaultProps, thumbNailUrl: "/test.png" }} />);

    expect(screen.getByAltText("category")).toHaveAttribute("src", "/test.png");
  });

  it("click test", () => {
    renderWithContext(router, queryClient, <PostCard post={defaultProps} />);

    const postCard = screen.getByTestId("postCard");
    fireEvent.click(postCard);
    expect(router.push).toHaveBeenCalledWith(`/post/${defaultProps.id}`);
  });
});
