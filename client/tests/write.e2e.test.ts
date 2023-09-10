import { test, expect } from "@playwright/test";
import WritePOM from "./POM/write";

test.describe("페이지 진입 가능 여부 -", () => {
  test("일반 사용자는 글쓰기 페이지에 진입할 수 없다.", async ({ page }) => {
    const write = new WritePOM(page);
    await write.goTo({});

    const notFoundText = write.page.getByText("존재하지 않는 페이지입니다.");

    await expect(notFoundText).toBeVisible();
  });
});
