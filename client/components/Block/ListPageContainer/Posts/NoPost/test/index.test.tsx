import { render, screen } from "@testing-library/react";
import React from "react";
import NoPost from "..";

describe("<NoPost />", () => {
  it("rendering test", () => {
    const isPostExist = false;
    render(<NoPost isPostExist={isPostExist} />);
    expect(screen.getByText("게시글이 없습니다.")).toBeInTheDocument();
    expect(screen.getByAltText("noPost")).toBeInTheDocument();
  });
});
