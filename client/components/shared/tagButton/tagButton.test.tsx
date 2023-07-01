import { screen } from "@testing-library/react";
import TagButton from "./tagButton";
import React from "react";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<TagButton />", () => {
  const props = {
    tag: {
      id: 1,
      content: "testTag",
    },
  };

  it("rendering test", () => {
    renderWithContext(<TagButton tag={props.tag} />);

    expect(screen.getByText(`#${props.tag.content}`)).toBeInTheDocument();
    expect(screen.getByTestId(`tagButton`)).toBeInTheDocument();
  });

  it("Tag Button이 적절한 Link를 가지고 있어야 한다.", () => {
    renderWithContext(<TagButton tag={props.tag} />);

    expect(screen.getByTestId(`tagButton`)).toHaveAttribute("href", `/?tag=${props.tag.content}`);
  });
});
