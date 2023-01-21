import { rest } from "msw";
import { ServerURL } from "constants/serverURL";

export const getRecentTag = rest.get(`${ServerURL}/tag/recent`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
      Array.from({ length: 15 }, (_, idx) => {
        return `testRecentTag${idx}`;
      })
    )
  );
});
