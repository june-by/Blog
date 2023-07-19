import { getRecentTagsAPI } from ".";

describe("TagAPI", () => {
  it("getRecentTagAPI", async () => {
    expect(await getRecentTagsAPI()).toStrictEqual(
      Array.from({ length: 15 }, (_, idx) => {
        return `testRecentTag${idx}`;
      })
    );
  });
});
