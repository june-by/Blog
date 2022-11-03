import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import OtherPost from "..";
import { createMockRouter } from "../../../../utils/test/createMockRouter";

describe("<OtherPost />", () => {
  const defaultProps = {
    mode: "next",
    Post: {
      OtherId: 10,
      OtherCreatedAt: new Date(),
      OtherTitle: "testPost",
    },
  };
  it("rendering test", () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <OtherPost Post={defaultProps.Post} mode={defaultProps.mode} />
      </RouterContext.Provider>
    );
    expect(screen.getByText("다음게시글")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.Post.OtherTitle)).toBeInTheDocument();
  });

  it("click and gotoPost function test", () => {
    const router = createMockRouter();
    render(
      <RouterContext.Provider value={router}>
        <OtherPost Post={defaultProps.Post} mode={defaultProps.mode} />
      </RouterContext.Provider>
    );
    const otherPost = screen.getByTestId("OtherPost");
    fireEvent.click(otherPost);
    expect(router.push).toHaveBeenCalledWith(`/post/${defaultProps.Post.OtherId}`);
  });

  it("test with no post", () => {
    const router = createMockRouter();
    const props = {
      mode: "prev",
      Post: {
        OtherId: null,
        OtherCreatedAt: new Date(),
        OtherTitle: "testPost",
      },
    };
    render(
      <RouterContext.Provider value={router}>
        <OtherPost Post={props.Post} mode={props.mode} />
      </RouterContext.Provider>
    );
    expect(screen.getByText("이전게시글")).toBeInTheDocument();
    expect(screen.getByText("이전게시글이 없습니다 :(")).toBeInTheDocument();
    const otherPost = screen.getByTestId("OtherPost");
    fireEvent.click(otherPost);

    //이전, 이후 포스트가 없다면, 클릭 시 이동을 하지 않아야 함.
    expect(router.push).not.toBeCalled();
  });
});
