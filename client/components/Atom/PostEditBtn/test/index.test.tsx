import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import PostEditBtn from "..";
import { createMockRouter } from "../../../../utils/test/createMockRouter";

describe("<PostEditBtn />", () => {
  const router = createMockRouter();
  const props = { id: 10 };

  it("rendering test", () => {
    render(
      <RouterContext.Provider value={router}>
        <PostEditBtn id={props.id} />
      </RouterContext.Provider>
    );
    expect(screen.getByTestId("postEditBtn")).toBeInTheDocument();
    expect(screen.getByText("글 수정하기")).toBeInTheDocument();
  });

  it("click test", () => {
    render(
      <RouterContext.Provider value={router}>
        <PostEditBtn id={props.id} />
      </RouterContext.Provider>
    );
    const postEditBtn = screen.getByTestId("postEditBtn");
    fireEvent.click(postEditBtn);
    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith({
      pathname: "/Write",
      query: { mode: "Edit", id: props.id },
    });
  });
});
