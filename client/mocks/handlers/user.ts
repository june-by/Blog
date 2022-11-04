import { rest } from "msw";
import { ServerURL } from "../../utils/ServerURL";

export const getUserInfo = rest.get(`${ServerURL}/user`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      createdAt: new Date(),
      email: "test@test.com",
      id: 1,
      nickname: "testNickname",
    })
  );
});
