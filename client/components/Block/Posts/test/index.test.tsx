import { screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import Posts from "..";
import dateForm from "utils/dateForm";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<Posts />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  const props = {
    isLoading: false,
    posts: Array.from({ length: 10 }, (_, idx) => {
      return {
        id: idx,
        title: `testTitle${idx}`,
        category: `testCategory${idx}`,
        createdAt: new Date(),
        thumbNailUrl: "/test.png",
        views: 10,
        Tags: Array.from({ length: 5 }, (_, idx) => {
          return {
            id: idx,
            content: `testTag${idx}`,
          };
        }),
      };
    }),
  };

  it("rendering test", () => {
    renderWithContext(router, queryClient, <Posts posts={props.posts} isLoading={props.isLoading} />);
    props.posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getAllByText(dateForm(post.createdAt))).toHaveLength(10);
      expect(screen.getAllByText(`조회수 : ${post.views}`)).toHaveLength(10);
    });
  });
});
