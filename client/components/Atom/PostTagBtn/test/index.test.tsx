import { fireEvent, render, screen } from "@testing-library/react";
import PostTagBtn from "..";
import React from "react";
import { createMockRouter } from "../../../../utils/test/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("<PostTagBtn />", () => {
  const router = createMockRouter();
  const props = {
    tag: {
      id: 1,
      content: "testTag",
    },
  };

  it("rendering test", () => {
    render(
      <RouterContext.Provider value={router}>
        <PostTagBtn tag={props.tag} />
      </RouterContext.Provider>
    );
    expect(screen.getByText(`#${props.tag.content}`)).toBeInTheDocument();
    expect(screen.getByTestId(`postTagBtn`)).toBeInTheDocument();
  });

  it("click test", () => {
    render(
      <RouterContext.Provider value={router}>
        <PostTagBtn tag={props.tag} />
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByTestId(`postTagBtn`));
    expect(router.push).toHaveBeenCalledWith({
      pathname: "/filter",
      query: { tag: props.tag.content },
    });
  });
});
