import { test, expect } from "@playwright/test";
import { RECENT_COMMENT_MOCK_DATA } from "mocks/data/comment";
import { CATEGORY_LENGTH_MOCK_DATA, TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";
import { RECENT_TAG_MOCK_DATA } from "mocks/data/tag";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";
import PostsPOM from "./posts";

test("지정한 Page Title을 제공 해야 한다", async ({ page }) => {
  const PostsPage = new PostsPOM(page);
  await PostsPage.goTo();

  await expect(PostsPage.page).toHaveTitle("ByJuun.com");
});

test.describe("카테고리 - ", () => {
  test("각 카테고리 별 포스트 개수가 노출되어야 한다.", async ({ page }) => {
    const PostsPage = new PostsPOM(page);
    await PostsPage.goTo();

    for (const category of CATEGORY_LENGTH_MOCK_DATA) {
      await expect(
        PostsPage.page.getByRole("button", { name: `${category.category} ${category.count}` })
      ).toBeVisible();
    }
  });

  test("카테고리 버튼을 클릭하면, 해당 페이지로 이동해야 한다.", async ({ page }) => {
    const PostsPage = new PostsPOM(page);
    await PostsPage.goTo();

    await PostsPage.page.getByRole("button", { name: "JavaScript" }).click();

    await expect(PostsPage.page).toHaveURL(`posts?category=JavaScript`);
  });
});

// test.describe("사이드바 - ", () => {
//   test("방문객을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
//     const PostsPage = new PostsPOM(page);
//     await PostsPage.goTo();

//     const totalVisitor = PostsPage.page.getByText(`총 방문 : ${VISITOR_MOCK_DATA.totalVisitor}명`);
//     const todayVisitor = PostsPage.page.getByText(`오늘 방문 : ${VISITOR_MOCK_DATA.todayVisitor}명`);

//     await expect(totalVisitor).toBeVisible();
//     await expect(todayVisitor).toBeVisible();
//   });

//   test("조회수 Top10을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
//     const PostsPage = new PostsPOM(page);
//     await PostsPage.goTo();

//     const TopViewPostsBlock = page.getByText("조회수 Top10");

//     await expect(TopViewPostsBlock).toBeVisible();

//     for (let idx = 0; idx < 10; idx++) {
//       await expect(PostsPage.page.getByText(`${idx + 1}. ${TOP_VIEWS_POST_MOCK_DATA[idx].title}`)).toBeVisible();
//     }
//   });

//   test("최근 댓글을 보여주는 사이드바가 있어야 한다", async ({ page }) => {
//     const PostsPage = new PostsPOM(page);
//     await PostsPage.goTo();

//     const recentCommentsBlock = PostsPage.page.getByText("최근 댓글");

//     await expect(recentCommentsBlock).toBeVisible();

//     for (const recentComment of RECENT_COMMENT_MOCK_DATA) {
//       await expect(PostsPage.page.getByText(`${recentComment.content}`)).toBeVisible();
//     }
//   });

//   test("최근 태그를 보여주는 사이드바가 있어야 한다", async ({ page }) => {
//     const PostsPage = new PostsPOM(page);
//     await PostsPage.goTo();

//     const recentTagBlock = PostsPage.page.getByText("최근 태그");

//     await expect(recentTagBlock).toBeVisible();

//     for (const recentTag of RECENT_TAG_MOCK_DATA) {
//       await expect(PostsPage.page.getByText(`${recentTag}`, { exact: true })).toBeVisible();
//     }
//   });
// });

test.describe("포스트 카드 - ", () => {});
