import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import Pagination from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";
import { makeArray, makeNextPath } from "utils";

describe("<Pagination />", () => {
  const totalPage = 10;
  const router = createMockRouter({
    query: { page: "4" },
    pathname: "/filter",
  });
  const queryClient = new QueryClient();

  it("rendering test", async () => {
    renderWithContext(
      router,
      queryClient,
      <Pagination totalPage={totalPage} />
    );
    expect(screen.getByRole("button", { name: "이전" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "다음" })).toBeInTheDocument();
    for (const btn of makeArray(Number(router.query.page), totalPage)) {
      if (btn !== "...")
        expect(await screen.findByRole("button", { name: String(btn) }));
    }
  });

  it("prevBtn click test", async () => {
    const page = router.query.page;
    renderWithContext(
      router,
      queryClient,
      <Pagination totalPage={totalPage} />
    );
    const prevBtn = await screen.findByRole("button", { name: "이전" });
    fireEvent.click(prevBtn);
    expect(router.push).toBeCalledWith(
      makeNextPath(router.pathname, Number(page) - 1, router.query)
    );
  });

  it("nextBtn click test", async () => {
    const { page } = router.query;
    renderWithContext(
      router,
      queryClient,
      <Pagination totalPage={totalPage} />
    );
    const nextBtn = await screen.findByRole("button", { name: "다음" });
    fireEvent.click(nextBtn);
    expect(router.push).toBeCalledWith(
      makeNextPath(router.pathname, Number(page) + 1, router.query)
    );
  });

  it("numberBtn click test", async () => {
    const nextPage = "5";
    renderWithContext(
      router,
      queryClient,
      <Pagination totalPage={totalPage} />
    );
    const numberBtn = await screen.findByRole("button", { name: nextPage });
    fireEvent.click(numberBtn);
    expect(router.push).toBeCalledWith(
      makeNextPath(router.pathname, Number(nextPage), router.query)
    );
  });
});
