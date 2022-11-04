import { rest } from "msw";
import { ServerURL } from "../../utils/ServerURL";

export const postComment = rest.post(`${ServerURL}/post/:postId/comment`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("성공"));
});
