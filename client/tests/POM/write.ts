import { Page } from "@playwright/test";
import POM from "./pom";
import { UserType } from "@Types";
import { USER_MOCK_DATA } from "@mocks/data/user";
import { ServerURL } from "@constants";
import { FuncsType } from "../type";
import pipe from "../utils";

export interface WritePOM_MockAPIParams {
  isAdmin?: boolean;
}

interface gotoParams extends WritePOM_MockAPIParams {
  mode: "write" | "edit";
  postId: string;
}

export default class WritePOM extends POM {
  data!: UserType;
  constructor(page: Page) {
    super(page);
  }
  async goTo({ mode = "write", postId, isAdmin }: Partial<gotoParams>) {
    this.data = JSON.parse(JSON.stringify(USER_MOCK_DATA));
    await super.mocking();
    await this.mockAPI({ isAdmin });

    const pageUrl =
      mode === "write" ? "/write" : `/write?mode=edit&id=${postId}`;
    await this.page.goto(pageUrl);
  }

  async mockAPI({ isAdmin = false }: WritePOM_MockAPIParams) {
    await this.page.route(`${ServerURL}/user`, async (route) => {
      const result = pipe(setAdmin)({
        data: this.data,
        feature: {
          isAdmin,
        },
      });

      await route.fulfill({
        json: result.data,
      });
    });
  }
}

const setAdmin: FuncsType<UserType> = ({ data, feature }) => {
  const { isAdmin } = feature;
  const result = { ...data };
  if (isAdmin) {
    result.nickname = "By_juun";
    result.provider = "local";
  }

  return { data: result, feature };
};
