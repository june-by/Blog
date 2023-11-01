import { rest } from "msw";
import { DUMMY, ServerURL } from "@constants";

export const getUserInfo = rest.get(`${ServerURL}/user`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(DUMMY.USER));
});

export const login = rest.post(`${ServerURL}/user/login`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("success"));
});

export const logout = rest.get(`${ServerURL}/user/logout`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("success"));
});

export const signup = rest.post(`${ServerURL}/user/signup`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("success"));
});
