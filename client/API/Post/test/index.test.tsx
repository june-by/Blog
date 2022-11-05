import { getAllCategoryLengthAPI, getCategoryPostAPI, getOnePostAPI, getPostsNumAPI, GetTopViewsPostsAPI } from "..";
import { Category } from "../../../utils/category";

describe("postAPI", () => {
  it("getOnePostAPI", async () => {
    expect(await getOnePostAPI(1)).toStrictEqual({
      mainPost: {
        title: "testPost",
        category: "testCategory",
        content: "testContent",
        thumbNailUrl: "/test.png",
        Tags: [
          { content: "tag1", id: 10 },
          { content: "tag2", id: 20 },
          { content: "tag3", id: 30 },
        ],
      },
      prevPost: {
        OtherId: 2,
        OtherTitle: "prevTestPost",
        OtherCreatedAt: "2022-05-25T12:19:30.000Z",
      },
      nextPost: {
        OtherId: 3,
        OtherTitle: "nextTestPost",
        OtherCreatedAt: "2022-05-25T12:19:32.000Z",
      },
    });
  });

  it("getCategoryPostAPI", async () => {
    expect(await getCategoryPostAPI("testCategory", 1)).toStrictEqual(
      Array.from({ length: 16 }, (_, idx) => {
        return {
          categroy: "testCategory",
          createdAt: "2022-05-25T12:19:28.000Z",
          id: idx,
          title: `testTitle${idx}`,
          thumbNailUrl: "/test.png",
          views: idx + 1,
          Tags: Array.from({ length: 3 }, (_, tagIdx) => {
            return {
              id: tagIdx,
              content: `testTag${tagIdx}`,
            };
          }),
        };
      })
    );
  });

  it("getPostsNumAPI", async () => {
    expect(await getPostsNumAPI("testCategory")).toStrictEqual(1);
  });

  it("getTopViewsPosts", async () => {
    expect(await GetTopViewsPostsAPI()).toStrictEqual(
      Array.from({ length: 10 }, (_, idx) => {
        return { id: idx, title: `testTopViewPost${idx}` };
      })
    );
  });

  it("getAllCategoryLength", async () => {
    expect(await getAllCategoryLengthAPI()).toStrictEqual(
      Category.map((category, idx) => {
        return {
          category,
          count: idx + 1,
        };
      })
    );
  });
});
