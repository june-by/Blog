import { Page } from "@playwright/test";
import DUMMY from "constants/dummy";
import PAGE from "constants/page";
import { ServerURL } from "constants/serverURL";
import {
  CATEGORY_LENGTH_MOCK_DATA,
  MAIN_POSTS_MOCK_DATA,
} from "mocks/data/post";
import { USER_MOCK_DATA } from "mocks/data/user";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";
import POM from "./pom";

export default class PostsPOM extends POM {
  constructor(page: Page) {
    super(page);
  }

  async goTo() {
    await this.mocking();
    await this.page.goto(PAGE.POSTS.url);
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
          await route.fulfill({
            json: { todayVisitor: 1, totalVisitor: 10 },
          });
      }
    });

    await this.page.route(
      `${ServerURL}/posts/load/categoryLength`,
      async (route) => {
        await route.fulfill({
          json: CATEGORY_LENGTH_MOCK_DATA,
        });
      }
    );

    await this.page.route(`${ServerURL}/posts/load/main/*`, async (route) => {
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

    await this.page.route(`${ServerURL}/post/load/*`, async (route) => {
      //if (route.request().method() !== "POST") return;
      await route.fulfill({
        json: DUMMY.POST,
      });
    });
  }

  async openLoginModal() {
    await this.page.getByRole("button", { name: "로그인" }).click();
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
