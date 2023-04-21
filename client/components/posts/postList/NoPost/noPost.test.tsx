import { render, screen } from "@testing-library/react";
import React from "react";
import NoPost from "./noPost";

describe("<NoPost />", () => {
  it("rendering test", () => {
    render(<NoPost />);
    expect(screen.getByText("게시글이 없습니다.")).toBeInTheDocument();
    expect(screen.getByAltText("noPost")).toBeInTheDocument();
  });
});
