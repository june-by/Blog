import { test, expect } from "@playwright/test";
import { RECENT_COMMENT_MOCK_DATA } from "mocks/data/comment";
import { CATEGORY_LENGTH_MOCK_DATA, MAIN_POSTS_MOCK_DATA, TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";
import { RECENT_TAG_MOCK_DATA } from "mocks/data/tag";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";
import PostsPOM from "./posts";
import { USER_MOCK_DATA } from "mocks/data/user";
import { ServerURL } from "constants/serverURL";

test("지정한 Page Title을 제공 해야 한다", async ({ page }) => {
  const posts = new PostsPOM(page);
  await posts.goTo();

  await expect(posts.page).toHaveTitle("ByJuun.com");
});

test.describe("카테고리 - ", () => {
  test("각 카테고리 별 포스트 개수가 노출되어야 한다.", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    for (const category of CATEGORY_LENGTH_MOCK_DATA) {
      await expect(posts.page.getByRole("button", { name: `${category.category} ${category.count}` })).toBeVisible();
    }
  });

  test("카테고리 버튼을 클릭하면, 해당 페이지로 이동해야 한다.", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    await posts.page.getByRole("button", { name: "JavaScript" }).click();

    await expect(posts.page).toHaveURL(`posts?category=JavaScript`);
  });
});

// test.describe("사이드바 - ", () => {
//   test("방문객을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
//     const posts = new PostsPOM(page);
//     await posts.goTo();

//     const totalVisitor = posts.page.getByText(`총 방문 : ${VISITOR_MOCK_DATA.totalVisitor}명`);
//     const todayVisitor = posts.page.getByText(`오늘 방문 : ${VISITOR_MOCK_DATA.todayVisitor}명`);

//     await expect(totalVisitor).toBeVisible();
//     await expect(todayVisitor).toBeVisible();
//   });

//   test("조회수 Top10을 보여주는 사이드바가 있어야 한다.", async ({ page }) => {
//     const posts = new PostsPOM(page);
//     await posts.goTo();

//     const TopViewPostsBlock = page.getByText("조회수 Top10");

//     await expect(TopViewPostsBlock).toBeVisible();

//     for (let idx = 0; idx < 10; idx++) {
//       await expect(posts.page.getByText(`${idx + 1}. ${TOP_VIEWS_POST_MOCK_DATA[idx].title}`)).toBeVisible();
//     }
//   });

//   test("최근 댓글을 보여주는 사이드바가 있어야 한다", async ({ page }) => {
//     const posts = new PostsPOM(page);
//     await posts.goTo();

//     const recentCommentsBlock = posts.page.getByText("최근 댓글");

//     await expect(recentCommentsBlock).toBeVisible();

//     for (const recentComment of RECENT_COMMENT_MOCK_DATA) {
//       await expect(posts.page.getByText(`${recentComment.content}`)).toBeVisible();
//     }
//   });

//   test("최근 태그를 보여주는 사이드바가 있어야 한다", async ({ page }) => {
//     const posts = new PostsPOM(page);
//     await posts.goTo();

//     const recentTagBlock = posts.page.getByText("최근 태그");

//     await expect(recentTagBlock).toBeVisible();

//     for (const recentTag of RECENT_TAG_MOCK_DATA) {
//       await expect(posts.page.getByText(`${recentTag}`, { exact: true })).toBeVisible();
//     }
//   });
// });

test.describe("게시글 카드 - ", () => {
  test("카드를 클릭하면, 해당 게시글 페이지로 이동한다", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    const mockPostData = MAIN_POSTS_MOCK_DATA[10];

    const targetPostCard = posts.page.getByRole("link").filter({
      hasText: new RegExp(`^.*(${mockPostData.title}).*`),
    });

    await targetPostCard.click();

    await expect(posts.page).toHaveURL(`/post/${mockPostData.id}`);
  });

  test("각 카드에 존재하는 태그를 클릭하면, 해당 태그와 매칭되는 게시글을 보여주는 페이지로 이동한다", async ({
    page,
  }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    const mockPostData = MAIN_POSTS_MOCK_DATA[10];
    const mockTargetTagData = mockPostData.Tags[0];

    const targetTag = posts.page
      .getByRole("link")
      .filter({
        hasText: new RegExp(`^.*(${mockPostData.title}).*`),
      })
      .getByText(`#${mockTargetTagData.content}`);

    await targetTag.click();

    await expect(posts.page).toHaveURL(`/posts?tag=${mockTargetTagData.content}`);
  });
});

test.describe("헤더 - ", () => {
  test("깃허브 버튼을 클릭하면, 본인 깃허브로 이동한다", async ({ page, context }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    const gotoGithubButton = posts.page.getByRole("button", { name: "gotoGithubButton" });

    const [githubPage] = await Promise.all([context.waitForEvent("page"), gotoGithubButton.click()]);

    await expect(githubPage).toHaveURL("https://github.com/BY-juun");
  });

  test("이메일 버튼을 누르면, 본인 이메일이 노출된다", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    const emailButton = posts.page.getByRole("button", { name: "toggleEmailButton" });

    await emailButton.click();

    await expect(posts.page.getByText("neostgeart@gmail.com")).toBeVisible();
  });

  test("다크모드 토글 버튼을 누르면, 모드가 변경되어야 한다", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    const darkModeTogglButton = posts.page.getByRole("button", { name: "toggleDarkModeButton" });

    await expect(posts.page.locator("body")).toHaveAttribute("data-theme", "light");

    await darkModeTogglButton.click();

    await expect(posts.page.locator("body")).toHaveAttribute("data-theme", "dark");
  });

  test("검색 버튼을 누르면, 검색 모달이 노출되어야 한다", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    await posts.openSearchModal();

    await expect(posts.page.getByText("게시글 찾기")).toBeVisible();
  });

  test("사용자 버튼을 누르면, 로그인 모달이 노출되어야 한다", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    await posts.openLoginModal();

    await expect(posts.page.getByText(new RegExp(/(?=.*로그인)(?=.*소셜 계정으로 로그인).*/))).toBeVisible();
  });
});

test.describe("모달 - ", () => {
  test("검색 모달에서 검색어 입력 후 확인 버튼을 누르면, 해당 검색어와 관련된 게시글 목록을 보여주는 페이지로 이동한다", async ({
    page,
  }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    await posts.openSearchModal();

    const searchInput = posts.page.getByTestId("searchInput");

    await searchInput.fill("react");

    await posts.page.getByRole("button", { name: "검색" }).click();

    await expect(posts.page).toHaveURL("posts?search=react");
  });

  test("로그인 모달에서 아이디와 비밀번호를 입력 후, 로그인 버튼을 누르면 로그인이 되어 헤더에 사용자의 닉네임이 표시된다", async ({
    page,
  }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    await posts.openLoginModal();

    await posts.page.getByTestId("emailInput").fill("test@test.com");
    await posts.page.getByTestId("passwordInput").fill("*****");

    posts.page.on("dialog", (dialog) => {
      dialog.accept();
    });

    await posts.mockGetUserAPI();

    await posts.page.getByRole("button", { name: "로그인" }).click();

    await expect(posts.page.getByText(`${USER_MOCK_DATA.nickname}님`)).toBeVisible();
  });

  test("로그인 모달에서 회원가입 버튼을 클릭하면, 회원가입 모달이 노출되어야 한다.", async ({ page }) => {
    const posts = new PostsPOM(page);
    await posts.goTo();

    await posts.openLoginModal();

    await posts.page.getByRole("button", { name: "회원가입" }).click();

    const signUpModal = posts.page.getByText(new RegExp(/(?=.*회원가입)(?=.*소셜 계정으로 로그인).*/));

    await expect(signUpModal).toBeVisible();
  });
});
