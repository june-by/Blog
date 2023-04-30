import { getAllCategoryLengthAPI, getCategoryPostAPI, getOnePostAPI, GetTopViewsPostsAPI } from ".";
import DUMMY from "constants/dummy";
import { Category } from "constants/category";
import { TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";

describe("postAPI", () => {
  it("getOnePostAPI", async () => {
    expect(await getOnePostAPI(1)).toStrictEqual({
      ...DUMMY.POST,
      mainPost: {
        ...DUMMY.POST.mainPost,
        createdAt: "2022-11-13T06:26:45.837Z",
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

  it("getTopViewsPosts", async () => {
    expect(await GetTopViewsPostsAPI()).toStrictEqual(TOP_VIEWS_POST_MOCK_DATA);
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
