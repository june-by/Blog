import { rest } from "msw";
import { Category } from "../../utils/variable";
import { ServerURL } from "../../utils/ServerURL";

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
  return res(
    ctx.status(200),
    ctx.json({
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
    })
  );
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
  return res(
    ctx.status(200),
    ctx.json(
      Array.from({ length: 10 }, (_, idx) => {
        return { id: idx, title: `testTopViewPost${idx}` };
      })
    )
  );
});

export const getAllCategoryLength = rest.get(`${ServerURL}/posts/load/categoryLength`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
      Category.map((category, idx) => {
        return {
          category,
          count: idx + 1,
        };
      })
    )
  );
});
