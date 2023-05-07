import { Page } from "@playwright/test";
import PAGE from "constants/page";
import { ServerURL } from "constants/serverURL";
import { RECENT_COMMENT_MOCK_DATA } from "mocks/data/comment";
import { CATEGORY_LENGTH_MOCK_DATA, MAIN_POSTS_MOCK_DATA, TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";
import { RECENT_TAG_MOCK_DATA } from "mocks/data/tag";
import { USER_MOCK_DATA } from "mocks/data/user";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";

export default class PostsPOM {
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

    await this.page.route(`${ServerURL}/posts/load/categoryLength`, async (route) => {
      await route.fulfill({
        json: CATEGORY_LENGTH_MOCK_DATA,
      });
    });

    await this.page.route(`${ServerURL}/posts/load/main/1`, async (route) => {
      await route.fulfill({
        json: MAIN_POSTS_MOCK_DATA,
      });
    });

    await this.page.route(`${ServerURL}/user/login`, async (route) => {
      //if (route.request().method() !== "POST") return;
      await route.fulfill({
        json: USER_MOCK_DATA,
      });
    });
  }

  async openSearchModal() {
    await this.page.getByRole("button", { name: "searchButton" }).click();
  }

  async openLoginModal() {
    await this.page.getByRole("button", { name: "accountButton" }).click();
  }

  async openSingUpModal() {
    await this.openLoginModal();
    await this.page.getByRole("button", { name: "회원가입" }).click();
  }

  async mockGetUserAPI() {
    await this.page.route(`${ServerURL}/user`, async (route) => {
      await route.fulfill({
        json: USER_MOCK_DATA,
      });
    });
  }

  async mockSignUpAPI() {
    await this.page.route(`${ServerURL}/user/signup`, async (route) => {
      await route.fulfill({ body: "ok" });
    });
  }
}
