import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI } from "..";
import { DummyUser } from "utils/dummy";

const dummyPwd = "test";
describe("UserAPI", () => {
  it("getUserInfoAPI", async () => {
    expect(await getUserInfoAPI()).toStrictEqual(DummyUser);
  });

  it("loginAPI", async () => {
    expect(
      await LoginAPI({ email: DummyUser.email, password: dummyPwd })
    ).toStrictEqual("success");
  });

  it("logoutAPI", async () => {
    expect(await LogOutAPI()).toStrictEqual("success");
  });

  it("signupAPI", async () => {
    expect(
      await SignUpAPI({
        email: DummyUser.email,
        password: dummyPwd,
        nickname: DummyUser.nickname,
      })
    ).toStrictEqual("success");
  });
});
