import { rest } from "msw";
import { ServerURL } from "constants/serverURL";

export const getVisitor = rest.get(`${ServerURL}/visitor`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      totalVisitor: 100,
      todayVisitor: 10,
    })
  );
});

export const postVisitor = rest.post(`${ServerURL}/visitor`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("success"));
});
