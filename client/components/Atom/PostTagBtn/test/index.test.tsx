import { fireEvent, render, screen } from "@testing-library/react";
import PostTagBtn from "..";
import React from "react";
import { createMockRouter } from "utils/test/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { QueryClient } from "react-query";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostTagBtn />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();

  const props = {
    tag: {
      id: 1,
      content: "testTag",
    },
  };

  it("rendering test", () => {
    renderWithContext(router, queryClient, <PostTagBtn tag={props.tag} />);

    expect(screen.getByText(`#${props.tag.content}`)).toBeInTheDocument();
    expect(screen.getByTestId(`postTagBtn`)).toBeInTheDocument();
  });

  it("click test", () => {
    renderWithContext(router, queryClient, <PostTagBtn tag={props.tag} />);

    fireEvent.click(screen.getByTestId(`postTagBtn`));
    expect(router.push).toHaveBeenCalledWith({
      pathname: "/filter",
      query: { tag: props.tag.content },
    });
  });
});
