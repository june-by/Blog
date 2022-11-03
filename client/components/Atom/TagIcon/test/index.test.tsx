import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import TagIcon from "..";
import { createMockRouter } from "../../../../utils/test/createMockRouter";

describe("<TagIcon />", () => {
  const props = {
    tag: "testTag",
  };

  it("rendering test", () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <TagIcon tag={props.tag} />
      </RouterContext.Provider>
    );
    expect(screen.getByText(props.tag)).toBeInTheDocument();
  });

  it("click test", () => {
    const router = createMockRouter();

    render(
      <RouterContext.Provider value={router}>
        <TagIcon tag={props.tag} />
      </RouterContext.Provider>
    );

    const testIcon = screen.getByTestId("tagIcon");
    expect(testIcon).toBeInTheDocument();

    fireEvent.click(testIcon);
    expect(router.push).toBeCalled();
    expect(router.push).toHaveBeenCalledWith({
      pathname: "/filter",
      query: { tag: props.tag },
    });
  });
});
