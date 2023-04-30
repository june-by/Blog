import { Page } from "@playwright/test";
import PAGE from "constants/page";

export default class HomePOM {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo() {
    this.page.goto(PAGE.HOME);
  }
}
