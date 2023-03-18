import { rest } from "msw";
import { ServerURL } from "constants/serverURL";
import DUMMY from "constants/dummy";
import { Category } from "constants/category";

export const getCategoryPosts = rest.get(
  `${ServerURL}/posts/load/:category/:pageNum`,
  (req, res, ctx) => {
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
  }
);

export const getOnePost = rest.get(
  `${ServerURL}/post/load/:postId`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY.POST));
  }
);

export const getPostsNum = rest.get(
  `${ServerURL}/posts/load/length/:category`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        length: 100,
      })
    );
  }
);

export const getTopViewsPosts = rest.get(
  `${ServerURL}/posts/topViews`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        Array.from({ length: 10 }, (_, idx) => {
          return { id: idx, title: `testTopViewPost${idx}` };
        })
      )
    );
  }
);

export const getAllCategoryLength = rest.get(
  `${ServerURL}/posts/load/categoryLength`,
  (req, res, ctx) => {
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
  }
);

export const getPostComments = rest.get(
  `${ServerURL}/post/load/comment/:postId`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY.COMMENTS_LIST));
  }
);

export const getPostViewCount = rest.get(
  `${ServerURL}/post/load/viewCount/:postId`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(DUMMY.POST_VIEW_COUNT));
  }
);
