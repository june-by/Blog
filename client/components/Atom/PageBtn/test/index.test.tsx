import { render, screen } from "@testing-library/react";
import React from "react";
import PageBtn, { getPageBtnStyle } from "..";

describe("<PageBtn/>", () => {
  beforeEach(() => {
    jest.spyOn(React, "useContext").mockImplementation(() => ({
      theme: "light",
    }));
  });

  const props = {
    idx: 1,
    currentPage: 1,
    onClickPageBtn: jest.fn(),
  };

  it("rendering test", () => {
    render(<PageBtn idx={props.idx} currentPage={props.currentPage} onClickPageBtn={props.onClickPageBtn} />);
    expect(screen.getByText(props.idx)).toBeInTheDocument();
  });

  it("getPageBtnStyle function test", () => {
    expect(getPageBtnStyle(1, 1, "light")).toEqual({ background: "#0099fa", color: "white" });
  });

  it("click test", () => {
    render(<PageBtn idx={props.idx} currentPage={props.currentPage} onClickPageBtn={props.onClickPageBtn} />);
    expect(props.onClickPageBtn).toHaveBeenCalled();
  });
});
