import { screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import PostTop from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostTop />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  const Post = {
    id: 1,
    content: "testContent",
    Comments: Array.from({ length: 5 }, (_, idx) => {
      return {
        User: { nickname: `testUser${idx}` },
        content: `testComment${idx}`,
        createdAt: new Date(),
      };
    }),
    Tags: Array.from({ length: 5 }, (_, idx) => {
      return { id: idx + 100, content: `testTag${idx}` };
    }),
    category: "testCategory",
    createdAt: new Date(),
    title: "testTitle",
    thumbNailUrl: "/test.png",
    views: 10,
  };
  it("rendering test", async () => {
    renderWithContext(router, queryClient, <PostTop Post={Post} />);
    expect(screen.getByText(Post.title)).toBeInTheDocument();
    expect(screen.getByText(Post.category)).toBeInTheDocument();
    Post.Tags.forEach((tag) => {
      expect(screen.getByText(`#${tag.content}`)).toBeInTheDocument();
    });
    expect(screen.getByText(`조회수 : ${Post.views + 1}`));
    await waitFor(() => {
      expect(screen.queryByText("글 삭제하기")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("글 수정하기")).not.toBeInTheDocument();
    });
  });
});
