import { getRecentTagsAPI } from "..";

describe("TagAPI", () => {
  it("getRecentCommentAPI", async () => {
    expect(await getRecentTagsAPI()).toStrictEqual(
      Array.from({ length: 15 }, (_, idx) => {
        return `testRecentTag${idx}`;
      })
    );
  });
});
