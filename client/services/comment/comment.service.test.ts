import { RECENT_COMMENT_MOCK_DATA } from "mocks/data/comment";
import { getRecentCommentAPI } from ".";

describe("CommentAPI", () => {
  it("getRecentCommentAPI", async () => {
    expect(await getRecentCommentAPI()).toStrictEqual(RECENT_COMMENT_MOCK_DATA);
  });
});
