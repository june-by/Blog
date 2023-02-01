import { fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import CommentForm from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";
import MESSAGE from "constants/message";

describe("<CommentForm />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();

  it("rendering test", async () => {
    renderWithContext(router, queryClient, <CommentForm />);
    expect(await screen.findByTestId("commentTextarea")).toHaveAttribute("placeholder", MESSAGE.COMMENT_PLEASE);
    expect(await screen.findByText("등록")).toBeInTheDocument();
  });

  it("댓글 등록 성공", async () => {
    renderWithContext(router, queryClient, <CommentForm />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    const commentForm = await screen.findByTestId("commentForm");
    const commentTextArea = await screen.findByTestId("commentTextarea");

    //댓글을 달고, submit
    fireEvent.change(commentTextArea, { target: { value: "testComment" } });
    fireEvent.submit(commentForm);

    await waitFor(() => {
      expect(alertMock).toBeCalledWith(MESSAGE.COMMENT_REGIST_SUCESS);
    });
  });

  it("댓글을 달지 않고 제출 버튼을 클릭", async () => {
    renderWithContext(router, queryClient, <CommentForm />);
    const commentForm = await screen.findByTestId("commentForm");
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    //댓글을 달지 않고, submit
    fireEvent.submit(commentForm);
    expect(alertMock).toBeCalledWith(MESSAGE.COMMENT_CONTENT_NEEDED);
  });
});
