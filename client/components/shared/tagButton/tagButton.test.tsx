import { fireEvent, screen } from "@testing-library/react";
import TagButton from "./tagButton";
import React from "react";
import { createMockRouter } from "utils/test/createMockRouter";
import { QueryClient } from "react-query";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<TagButton />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();

  const props = {
    tag: {
      id: 1,
      content: "testTag",
    },
  };

  it("rendering test", () => {
    renderWithContext(router, queryClient, <TagButton tag={props.tag} />);

    expect(screen.getByText(`#${props.tag.content}`)).toBeInTheDocument();
    expect(screen.getByTestId(`tagButton`)).toBeInTheDocument();
  });

  it("click test", () => {
    renderWithContext(router, queryClient, <TagButton tag={props.tag} />);

    expect(screen.getByTestId(`tagButton`)).toHaveAttribute("href", `/?tag=${props.tag.content}`);
  });
});
