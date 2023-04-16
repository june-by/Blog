import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient } from "react-query";
import TagIcon from ".";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<TagIcon />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();

  const props = {
    tag: "testTag",
  };

  it("rendering test", () => {
    renderWithContext(router, queryClient, <TagIcon tag={props.tag} />);

    expect(screen.getByText(props.tag)).toBeInTheDocument();
  });

  it("click test", () => {
    renderWithContext(router, queryClient, <TagIcon tag={props.tag} />);

    const testIcon = screen.getByTestId("tagIcon");
    expect(testIcon).toBeInTheDocument();

    fireEvent.click(testIcon);
    expect(router.push).toBeCalled();
    expect(router.push).toHaveBeenCalledWith({
      pathname: "/posts",
      query: { tag: props.tag },
    });
  });
});
