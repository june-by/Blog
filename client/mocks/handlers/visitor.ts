import { rest } from "msw";
import { ServerURL } from "@constants";
import { VISITOR_MOCK_DATA } from "mocks/data/visitor";

export const getVisitor = rest.get(`${ServerURL}/visitor`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(VISITOR_MOCK_DATA));
});

export const postVisitor = rest.post(
  `${ServerURL}/visitor`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.text("success"));
  }
);
