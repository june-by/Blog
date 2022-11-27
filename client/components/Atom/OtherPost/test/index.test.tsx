import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import OtherPost from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<OtherPost />", () => {
  const defaultProps = {
    mode: "next",
    Post: {
      OtherId: 10,
      OtherCreatedAt: new Date(),
      OtherTitle: "testPost",
    },
  };

  const router = createMockRouter();
  const queryClient = new QueryClient();

  it("rendering test", () => {
    renderWithContext(
      router,
      queryClient,
      <OtherPost Post={defaultProps.Post} mode={defaultProps.mode} />
    );
    expect(screen.getByText("다음게시글")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.Post.OtherTitle)).toBeInTheDocument();
  });

  it("click and gotoPost function test", () => {
    renderWithContext(
      router,
      queryClient,
      <OtherPost Post={defaultProps.Post} mode={defaultProps.mode} />
    );

    const otherPost = screen.getByTestId("OtherPost");
    fireEvent.click(otherPost);
    expect(router.push).toHaveBeenCalledWith(
      `/post/${defaultProps.Post.OtherId}`
    );
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
    renderWithContext(
      router,
      queryClient,
      <OtherPost Post={props.Post} mode={props.mode} />
    );

    expect(screen.getByText("이전게시글")).toBeInTheDocument();
    expect(screen.getByText("이전게시글이 없습니다 :(")).toBeInTheDocument();
    const otherPost = screen.getByTestId("OtherPost");
    fireEvent.click(otherPost);

    //이전, 이후 포스트가 없다면, 클릭 시 이동을 하지 않아야 함.
    expect(router.push).not.toBeCalled();
  });
});
