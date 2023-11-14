import { Page } from "@playwright/test";
import { ServerURL } from "@constants";
import { VISITOR_MOCK_DATA } from "@mocks/data/visitor";

export default class POM {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
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
      }
    });
  }
}
