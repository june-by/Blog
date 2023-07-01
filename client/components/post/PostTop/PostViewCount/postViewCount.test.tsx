import { screen } from "@testing-library/react";
import DUMMY from "constants/dummy";
import { renderWithContext } from "utils/test/renderWithContext";
import PostViewCount from ".";

describe("<PostViewCount />", () => {
  it("rendering test", async () => {
    renderWithContext(<PostViewCount />);

    expect(await screen.findByText(`조회수 : ${DUMMY.POST_VIEW_COUNT + 1}`)).toBeInTheDocument();
  });
});
