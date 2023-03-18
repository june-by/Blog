import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI } from ".";
import DUMMY from "constants/dummy";

const dummyPwd = "test";
describe("UserAPI", () => {
  it("getUserInfoAPI", async () => {
    expect(await getUserInfoAPI()).toStrictEqual(DUMMY.USER);
  });

  it("loginAPI", async () => {
    expect(
      await LoginAPI({ email: DUMMY.USER.email, password: dummyPwd })
    ).toStrictEqual("success");
  });

  it("logoutAPI", async () => {
    expect(await LogOutAPI()).toStrictEqual("success");
  });

  it("signupAPI", async () => {
    expect(
      await SignUpAPI({
        email: DUMMY.USER.email,
        password: dummyPwd,
        nickname: DUMMY.USER.nickname,
      })
    ).toStrictEqual("success");
  });
});
