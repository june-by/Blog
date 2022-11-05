import { rest } from "msw";
import { ServerURL } from "../../utils/ServerURL";

export const postComment = rest.post(`${ServerURL}/post/:postId/comment`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("성공"));
});

export const getCategoryPosts = rest.get(`${ServerURL}/posts/load/:category/:pageNum`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
      Array.from({ length: 16 }, (_, idx) => {
        return {
          categroy: "testCategory",
          createdAt: new Date(),
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
        Tags: [{ content: "tag1" }, { content: "tag2" }, { content: "tag3" }],
      },
      prevPost: {
        OtherId: 2,
        OtherTitle: "prevTestPost",
        OtherCreatedAt: new Date(),
      },
      nextPost: {
        OtherId: 3,
        OtherTitle: "nextTestPost",
        OtherCreatedAt: new Date(),
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
