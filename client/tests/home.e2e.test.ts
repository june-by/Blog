import { test, expect } from "@playwright/test";
import PAGE from "constants/page";

test("지정한 Page Title을 제공 해야 한다", async ({ page }) => {
  await page.goto(PAGE.HOME);

  await expect(page).toHaveTitle("ByJuun.com");
});

test("카테고리 버튼을 클릭하면, 해당 페이지로 이동해야 한다.", async ({
  page,
}) => {
  await page.goto(PAGE.HOME);

  await page.getByRole("button", { name: "JavaScript" }).click();

  await expect(page).toHaveURL(`posts?category=JavaScript`);
});

test("방문객을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
  await page.goto(PAGE.HOME);

  const totalVisitor = page.getByText("총 방문");
  const todayVisitor = page.getByText("오늘 방문");

  await expect(totalVisitor).toBeVisible();
  await expect(todayVisitor).toBeVisible();
});

test("조회수 Top10을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
  await page.goto(PAGE.HOME);

  const TopViewPostsBlock = page.getByText("조회수 Top10");

  await expect(TopViewPostsBlock).toBeVisible();
});

test("최근 댓글을 보여주는 사이드바가 있어야 한다", async ({ page }) => {
  await page.goto(PAGE.HOME);

  const recentCommentsBlock = page.getByText("최근 댓글");

  await expect(recentCommentsBlock).toBeVisible();
});

test("최근 태그를 보여주는 사이드바가 있어야 한다", async ({ page }) => {
  await page.goto(PAGE.HOME);

  const recentTagBlock = page.getByText("최근 태그");

  await expect(recentTagBlock).toBeVisible();
});
