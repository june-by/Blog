import { test, expect } from "@playwright/test";

import PostPOM from "./post";
import { POST_MOCK_DATA } from "mocks/data/post";

test("", async ({ page }) => {
  const post = new PostPOM(page);
  await post.goTo();

  await expect(post.page).toHaveTitle(POST_MOCK_DATA.mainPost.title);
});
