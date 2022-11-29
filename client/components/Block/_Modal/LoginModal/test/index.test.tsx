import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginModal from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<LoginModal />", () => {
  const props = {
    setOpen: jest.fn(),
  };
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("rendering test", () => {
    renderWithContext(
      router,
      queryClient,
      <LoginModal setOpen={props.setOpen} />
    );
    expect(screen.getAllByText("로그인")).toHaveLength(2);
    expect(screen.getByTestId("emailInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "로그인" })).toBeInTheDocument();
    expect(screen.getByTestId("closebtn")).toBeInTheDocument();
  });

  it("modalClose test", () => {
    renderWithContext(
      router,
      queryClient,
      <LoginModal setOpen={props.setOpen} />
    );
    const closeBtn = screen.getByTestId("closebtn");
    fireEvent.click(closeBtn);
    expect(props.setOpen).toBeCalled();
  });

  it("submit test", () => {
    //TODO mutate test
    renderWithContext(
      router,
      queryClient,
      <LoginModal setOpen={props.setOpen} />
    );
  });
});
