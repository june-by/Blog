import { getUserInfoAPI, LoginAPI, LogOutAPI, SignUpAPI } from "..";

describe("UserAPI", () => {
  it("getUserInfoAPI", async () => {
    expect(await getUserInfoAPI()).toStrictEqual({
      createdAt: "2022-05-25T12:19:28.000Z",
      email: "test@test.com",
      id: 1,
      nickname: "testNickname",
    });
  });

  it("loginAPI", async () => {
    expect(await LoginAPI({ email: "test@test.com", password: "test" })).toStrictEqual("success");
  });

  it("logoutAPI", async () => {
    expect(await LogOutAPI()).toStrictEqual("success");
  });

  it("signupAPI", async () => {
    expect(await SignUpAPI({ email: "test@test.com", password: "test", nickname: "testNickname" })).toStrictEqual("success");
  });
});
