import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import PostCard from "..";
import { dateForm } from "../../../../utils/dateForm";
import { getPostThumbNail } from "../../../../utils/getPostThumnail";
import { createMockRouter } from "../../../../utils/test/createMockRouter";

describe("<PostCard />", () => {
  const defaultProps = {
    category: "JavaScript",
    createdAt: new Date(),
    id: 1,
    title: "testPost",
    Tags: [
      { id: 1, content: "testTag1" },
      { id: 2, content: "testTag2" },
    ],
    thumbNailUrl: null,
    views: 10,
  };

  it("rendering test", () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <PostCard post={defaultProps} />
      </RouterContext.Provider>
    );
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(dateForm(defaultProps.createdAt))).toBeInTheDocument();
    expect(screen.getByText(`조회수 : ${defaultProps.views}`)).toBeInTheDocument();
    expect(screen.getByAltText("category")).toHaveAttribute("src", getPostThumbNail(defaultProps.category));
  });

  it("rendering test (feat, thumbNail src", () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <PostCard post={{ ...defaultProps, thumbNailUrl: "/test.png" }} />
      </RouterContext.Provider>
    );
    expect(screen.getByAltText("category")).toHaveAttribute("src", "/test.png");
  });

  it("click test", () => {
    const router = createMockRouter();
    render(
      <RouterContext.Provider value={router}>
        <PostCard post={defaultProps} />
      </RouterContext.Provider>
    );

    const postCard = screen.getByTestId("postCard");
    fireEvent.click(postCard);
    expect(router.push).toHaveBeenCalledWith(`/post/${defaultProps.id}`);
  });
});
