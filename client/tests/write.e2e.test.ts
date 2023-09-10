import { test, expect } from "@playwright/test";
import WritePOM from "./POM/write";

test.describe("페이지 진입 가능 여부 -", () => {
  test("일반 사용자는 글쓰기 페이지에 진입할 수 없다.", async ({ page }) => {
    const write = new WritePOM(page);
    await write.goTo({});

    const notFoundText = write.page.getByText("존재하지 않는 페이지입니다.");

    await expect(notFoundText).toBeVisible();
  });

  /**
   * Playwright에서 API를 Mocking할 때, ServerSide API는 Mockin하지 못한다.
   * 따라서, 해당 TC를 수행할 수 없음.
   */
  //   test("관리자는 글쓰기 페이지에 진입할 수 있다.", async ({ page }) => {
  //     const write = new WritePOM(page);
  //     await write.goTo({ isAdmin: true });

  //     const notFoundText = write.page.getByText("존재하지 않는 페이지입니다.");

  //     await expect(notFoundText).not.toBeVisible();
  //   });
});
