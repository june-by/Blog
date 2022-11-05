import { getRecentCommentAPI } from "..";

export {};
describe("CommentAPI", () => {
  it("getRecentCommentAPI", async () => {
    expect(await getRecentCommentAPI()).toStrictEqual(
      Array.from({ length: 10 }, (_, idx) => {
        return {
          id: idx,
          content: `testComment${idx}`,
          Post: {
            id: idx,
          },
        };
      })
    );
  });
});
