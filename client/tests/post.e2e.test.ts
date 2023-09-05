import { test, expect } from "@playwright/test";

import PostPOM from "./POM/post";
import { POST_MOCK_DATA } from "mocks/data/post";

test("지정한 Page Title을 제공해야 한다.", async ({ page }) => {
  const post = new PostPOM(page);
  await post.goTo({});

  await expect(post.page).toHaveTitle(POST_MOCK_DATA.mainPost.title);
});

test.describe("시리즈 - ", () => {
  test("더보기 버튼을 누르기 이전에는 시리즈의 다른 포스트 정보가 노출되면 안된다.", async ({
    page,
  }) => {
    const post = new PostPOM(page);
    await post.goTo({});

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
    await post.goTo({});

    await post.clickSeriesInfoMoreButton();

    await expect(
      post.page.getByText(
        new RegExp(`^.*(${POST_MOCK_DATA.mainPost.seriesPosts[1].title}).*`)
      )
    ).toBeVisible();
  });

  test("시리즈의 다른 포스트를 클릭하면 해당 포스트 페이지로 이동한다.", async ({
    page,
  }) => {
    const post = new PostPOM(page);
    await post.goTo({});

    await post.clickSeriesInfoMoreButton();

    const otherPostInSeries = POST_MOCK_DATA.mainPost.seriesPosts[1];

    const otherPostInSeriesLocator = post.page.getByText(
      new RegExp(`^.*(${otherPostInSeries.title}).*`)
    );

    await otherPostInSeriesLocator.click();

    await expect(post.page).toHaveURL(`/post/${otherPostInSeries.id}`);
  });

  test("다음 버튼을 누르면 해당 시리즈의 다음 포스트 페이지로 이동한다.", async ({
    page,
  }) => {
    const post = new PostPOM(page);
    await post.goTo({ isFirstPostInSeries: true });

    const gotoNextSeriesButton = post.page.getByTestId(
      "gotoNextSeriesPostButton"
    );

    await gotoNextSeriesButton.click();

    await expect(post.page).toHaveURL(
      `/post/${POST_MOCK_DATA.mainPost.seriesPosts[1].id}`
    );
  });

  test("해당 시리즈의 첫 포스트일 경우, 이전 버튼을 누를 수 없다.", async ({
    page,
  }) => {
    const post = new PostPOM(page);
    await post.goTo({ isFirstPostInSeries: true });

    const gotoPrevSeriesPostButton = post.page.getByTestId(
      "gotoPrevSeriesPostButton"
    );

    await expect(gotoPrevSeriesPostButton).toBeDisabled();
  });
});
