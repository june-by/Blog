import { rest } from "msw";
import { ServerURL } from "constants/serverURL";
import DUMMY from "constants/dummy";
import { CATEGORY_LENGTH_MOCK_DATA, TOP_VIEWS_POST_MOCK_DATA } from "mocks/data/post";

export const getCategoryPosts = rest.get(`${ServerURL}/posts/load/:category/:pageNum`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
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
    )
  );
});

export const getOnePost = rest.get(`${ServerURL}/post/load/:postId`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(DUMMY.POST));
});

export const getPostsNum = rest.get(`${ServerURL}/posts/load/length/:category`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      length: 100,
    })
  );
});

export const getTopViewsPosts = rest.get(`${ServerURL}/posts/topViews`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(TOP_VIEWS_POST_MOCK_DATA));
});

export const getAllCategoryLength = rest.get(`${ServerURL}/posts/load/categoryLength`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(CATEGORY_LENGTH_MOCK_DATA));
});

export const getPostComments = rest.get(`${ServerURL}/post/load/comment/:postId`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(DUMMY.COMMENTS_LIST));
});

export const getPostViewCount = rest.get(`${ServerURL}/post/load/viewCount/:postId`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(DUMMY.POST_VIEW_COUNT));
});
