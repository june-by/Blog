import { fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import CommentForm from "./commentForm";
import { renderWithContext } from "utils/test/renderWithContext";
import MESSAGE from "constants/message";
import { mockingToast } from "utils/test/mockFn";

describe("<CommentForm />", () => {
  it("rendering test", async () => {
    renderWithContext(<CommentForm />);
    expect(await screen.findByTestId("commentTextarea")).toHaveAttribute("placeholder", MESSAGE.LOGIN_NEEDED);
    expect(await screen.findByText("등록")).toBeInTheDocument();
  });

  it("로그인 하지 않은 상태에서 제출 버튼을 누르면, 로그인을 해야 한다는 얼럿이 나타난다.", async () => {
    renderWithContext(<CommentForm />);
    const commentForm = await screen.findByTestId("commentForm");

    const toastErrorMock = mockingToast("error");

    //댓글을 달지 않고, submit
    fireEvent.submit(commentForm);

    await waitFor(() => {
      expect(toastErrorMock).toBeCalledWith(MESSAGE.LOGIN_NEEDED);
    });
  });

  it("댓글 등록 성공", async () => {
    renderWithContext(<CommentForm />);
    const toastSuccessMock = mockingToast("success");

    const commentForm = await screen.findByTestId("commentForm");
    const commentTextArea = await screen.findByTestId("commentTextarea");

    //댓글을 달고, submit
    fireEvent.change(commentTextArea, { target: { value: "testComment" } });
    fireEvent.submit(commentForm);

    await waitFor(() => {
      expect(toastSuccessMock).toBeCalledWith(MESSAGE.COMMENT_REGIST_SUCESS);
    });
  });
});
