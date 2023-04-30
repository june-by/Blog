import { rest } from "msw";
import { ServerURL } from "constants/serverURL";
import { RECENT_COMMENT_MOCK_DATA } from "mocks/data/comment";

export const postComment = rest.post(`${ServerURL}/post/:postId/comment`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("성공"));
});

export const getRecentComment = rest.get(`${ServerURL}/comment/recent`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(RECENT_COMMENT_MOCK_DATA));
});
