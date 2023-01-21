import { fireEvent, screen } from "@testing-library/react";
import { QueryClient } from "react-query";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";
import CategoryRow from ".";

describe("<CategoryRow />", () => {
  const props = {
    category: "JavaScript",
    length: 10,
  };
  const router = createMockRouter();
  const queryClient = new QueryClient();

  it("props로 주입한 데이터가 화면에 렌더링 되어야 한다.", () => {
    renderWithContext(router, queryClient, <CategoryRow {...props} />);
    expect(screen.getByText(props.category)).toBeInTheDocument();
    expect(screen.getByText(props.length)).toBeInTheDocument();
  });

  it("버튼을 클릭하면, 올바른 페이지로 이 동해야 한다.", () => {
    renderWithContext(router, queryClient, <CategoryRow {...props} />);
    fireEvent.click(screen.getByTestId("CategoryRow"));
    expect(router.push).toBeCalledWith(`/category/${props.category}`);
  });
});
