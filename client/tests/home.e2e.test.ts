import { test, expect } from "@playwright/test";
import { TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";
import HomePOM from "./home";

test("지정한 Page Title을 제공 해야 한다", async ({ page }) => {
  const Home = new HomePOM(page);
  await Home.goTo();

  await expect(Home.page).toHaveTitle("ByJuun.com");
});

test("카테고리 버튼을 클릭하면, 해당 페이지로 이동해야 한다.", async ({ page }) => {
  const Home = new HomePOM(page);
  await Home.goTo();

  await Home.page.getByRole("button", { name: "JavaScript" }).click();

  await expect(Home.page).toHaveURL(`posts?category=JavaScript`);
});

test("방문객을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
  const Home = new HomePOM(page);
  await Home.goTo();

  const totalVisitor = Home.page.getByText(`총 방문 : ${VISITOR_MOCK_DATA.totalVisitor}명`);
  const todayVisitor = Home.page.getByText(`오늘 방문 : ${VISITOR_MOCK_DATA.todayVisitor}명`);

  await expect(totalVisitor).toBeVisible();
  await expect(todayVisitor).toBeVisible();
});

test("조회수 Top10을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
  const Home = new HomePOM(page);
  await Home.goTo();

  const TopViewPostsBlock = page.getByText("조회수 Top10");

  await expect(TopViewPostsBlock).toBeVisible();

  for (let idx = 0; idx < 10; idx++) {
    await expect(Home.page.getByText(`${idx + 1}. ${TOP_VIEWS_POST_MOCK_DATA[idx].title}`)).toBeVisible();
  }
});

test("최근 댓글을 보여주는 사이드바가 있어야 한다", async ({ page }) => {
  const Home = new HomePOM(page);
  await Home.goTo();

  const recentCommentsBlock = Home.page.getByText("최근 댓글");

  await expect(recentCommentsBlock).toBeVisible();
});

test("최근 태그를 보여주는 사이드바가 있어야 한다", async ({ page }) => {
  const Home = new HomePOM(page);
  await Home.goTo();

  const recentTagBlock = Home.page.getByText("최근 태그");

  await expect(recentTagBlock).toBeVisible();
});
