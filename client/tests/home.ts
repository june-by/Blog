import { Page } from "@playwright/test";
import PAGE from "constants/page";
import { ServerURL } from "constants/serverURL";
import { RECENT_COMMENT_MOCK_DATA } from "mocks/data/comment";
import { TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";
import { RECENT_TAG_MOCK_DATA } from "mocks/data/tag";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";

export default class HomePOM {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.mocking();
    await this.page.goto(PAGE.HOME);
  }

  async mocking() {
    await this.page.route(`${ServerURL}/visitor`, async (route) => {
      const method = route.request().method();

      switch (method) {
        case "GET":
          await route.fulfill({
            json: VISITOR_MOCK_DATA,
          });
          return;
        case "POST":
          await route.fallback();
          return;
      }
    });

    await this.page.route(`${ServerURL}/posts/topViews`, async (route) => {
      await route.fulfill({
        json: TOP_VIEWS_POST_MOCK_DATA,
      });
    });

    await this.page.route(`${ServerURL}/tag/recent`, async (route) => {
      await route.fulfill({
        json: RECENT_TAG_MOCK_DATA,
      });
    });

    await this.page.route(`${ServerURL}/comment/recent`, async (route) => {
      await route.fulfill({
        json: RECENT_COMMENT_MOCK_DATA,
      });
    });
  }
}
