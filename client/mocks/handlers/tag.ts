import { rest } from "msw";
import { ServerURL } from "constants/serverURL";
import { RECENT_TAG_MOCK_DATA } from "mocks/data/tag";

export const getRecentTag = rest.get(`${ServerURL}/tag/recent`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(RECENT_TAG_MOCK_DATA));
});
