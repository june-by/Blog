import { Page } from "@playwright/test";
import PAGE from "constants/page";
import { ServerURL } from "constants/serverURL";
import { POST_MOCK_DATA } from "mocks/data/post";
import POM from "./pom";

export default class PostPOM extends POM {
  constructor(page: Page) {
    super(page);
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

  async clickSeriesInfoMoreButton() {
    await this.page.getByRole("button", { name: "더보기" }).click();
  }
}
