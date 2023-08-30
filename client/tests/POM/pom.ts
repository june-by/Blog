import { Page } from "@playwright/test";

export default class POM {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
