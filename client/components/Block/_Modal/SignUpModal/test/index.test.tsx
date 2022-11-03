import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUpModal from "..";
import LoginModal from "..";
import { createMockRouter } from "../../../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../../../utils/test/renderWithContext";

describe("<LoginModal />", () => {
  const props = {
    setOpen: jest.fn(),
  };
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", () => {
    renderWithContext(router, queryClient, <SignUpModal setOpen={props.setOpen} />);

    expect(screen.getAllByText("회원가입")).toHaveLength(2);
    expect(screen.getByTestId("emailInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordCheckInput")).toBeInTheDocument();
    expect(screen.getByTestId("nicknameInput")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "회원가입" })).toBeInTheDocument();
    expect(screen.getByAltText("닫기")).toBeInTheDocument();
  });

  it("modalClose test", () => {
    renderWithContext(router, queryClient, <SignUpModal setOpen={props.setOpen} />);

    const closeBtn = screen.getByAltText("닫기");
    fireEvent.click(closeBtn);
    expect(props.setOpen).toBeCalled();
  });

  it("submit test", () => {
    //TODO mutate test
    renderWithContext(router, queryClient, <SignUpModal setOpen={props.setOpen} />);
  });
});
