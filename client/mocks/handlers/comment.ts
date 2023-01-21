import { rest } from "msw";
import { ServerURL } from "constants/serverURL";

export const postComment = rest.post(`${ServerURL}/post/:postId/comment`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("성공"));
});

export const getRecentComment = rest.get(`${ServerURL}/comment/recent`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
      Array.from({ length: 10 }, (_, idx) => {
        return {
          id: idx,
          content: `testComment${idx}`,
          Post: {
            id: idx,
          },
        };
      })
    )
  );
});
