import { getVisitorAPI, postVisitorAPI } from ".";

describe("VisitorAPI", () => {
  it("getVisitorAPI", async () => {
    expect(await getVisitorAPI()).toStrictEqual({ totalVisitor: 100, todayVisitor: 10 });
  });
  it("postVisitorAPI", async () => {
    expect(await postVisitorAPI()).toStrictEqual("success");
  });
});
