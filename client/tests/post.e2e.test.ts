import { test, expect } from "@playwright/test";

import PostPOM from "./post";
import { POST_MOCK_DATA } from "mocks/data/post";

test("지정한 Page Title을 제공해야 한다.", async ({ page }) => {
  const post = new PostPOM(page);
  await post.goTo();

  await expect(post.page).toHaveTitle(POST_MOCK_DATA.mainPost.title);
});

test.describe("시리즈 - ", () => {
  test("더보기 버튼을 누르기 이전에는 시리즈의 다른 포스트 정보가 노출되면 안된다.", async ({
    page,
  }) => {
    const post = new PostPOM(page);
    await post.goTo();

    await expect(
      post.page.getByText(
        new RegExp(`^.*(${POST_MOCK_DATA.mainPost.seriesPosts[1].title}).*`)
      )
    ).toBeHidden();
  });

  test("더보기 버튼을 누르면 시리즈의 다른 포스트 정보가 노출된다.", async ({
    page,
  }) => {
    const post = new PostPOM(page);
    await post.goTo();

    await post.clickSeriesInfoMoreButton();

    await expect(
      post.page.getByText(
        new RegExp(`^.*(${POST_MOCK_DATA.mainPost.seriesPosts[1].title}).*`)
      )
    ).toBeVisible();
  });
});
