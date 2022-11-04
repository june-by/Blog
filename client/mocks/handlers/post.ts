import { rest } from "msw";
import { ServerURL } from "../../utils/ServerURL";

export const postComment = rest.post(`${ServerURL}/post/:postId/comment`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.text("성공"));
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
