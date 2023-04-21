import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import PostEditButton from "./postEditButton";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<PostEditBtn />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  const props = { id: 10 };

  it("rendering test", () => {
    renderWithContext(router, queryClient, <PostEditButton id={props.id} />);

    expect(screen.getByTestId("postEditBtn")).toBeInTheDocument();
  });

  it("click test", () => {
    renderWithContext(router, queryClient, <PostEditButton id={props.id} />);

    const postEditBtn = screen.getByTestId("postEditBtn");
    fireEvent.click(postEditBtn);
    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith({
      pathname: "/Write",
      query: { mode: "Edit", id: props.id },
    });
  });
});
