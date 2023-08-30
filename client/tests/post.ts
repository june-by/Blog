import { Page } from "@playwright/test";
import PAGE from "constants/page";
import { ServerURL } from "constants/serverURL";
import { POST_MOCK_DATA } from "mocks/data/post";

export default class PostPOM {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.mocking();
    await this.page.goto("/post/1");
  }

  async mocking() {
    await this.page.route(`${ServerURL}/post/load/*`, async (route) => {
      await route.fulfill({
        json: POST_MOCK_DATA,
      });
    });

    await this.page.route(`${ServerURL}/posts/load/id`, async (route) => {
      await route.fulfill({
        json: [{ id: 1 }],
      });
    });
  }
}
