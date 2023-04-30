import { Page } from "@playwright/test";
import PAGE from "constants/page";
import { ServerURL } from "constants/serverURL";
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
  }
}
