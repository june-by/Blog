import { rest } from "msw";
import { ServerURL } from "../../utils/ServerURL";

export const getVisitor = rest.get(`${ServerURL}/visitor`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      totalVisitor: 100,
      todayVisitor: 10,
    })
  );
});
