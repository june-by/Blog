import { Posts, Tags, sequelizeConnection } from "models";
import Sequelize, { FindOptions } from "sequelize";
import { ORDER_BY_CREATED_AT } from "src/constants";
const Op = Sequelize.Op;

const POSTS_PER_PAGE = 20;

const DEFAULT_EXCLUDE_COLUMN = ["content", "updatedAt"];

const getAllPostsId = async () => {
  const posts = await Posts.findAll({
    attributes: ["id"],
  });
  return posts;
};

const getMainPosts = async ({ page }: { page: string }) => {
  const posts = await Posts.findAll({
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tags,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getCategoryPosts = async ({
  category,
  page,
}: {
  page: string;
  category: string;
}) => {
  const posts = await Posts.findAll({
    where: { category: category },
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tags,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsBySeriesId = async ({
  page,
  seriesId,
}: {
  page?: string;
  seriesId?: number;
}) => {
  const isPagedRequest = !!page;

  const fieldForPagedQuery = isPagedRequest
    ? {
        order: ORDER_BY_CREATED_AT,
        limit: POSTS_PER_PAGE,
        offset: (Number(page) - 1) * POSTS_PER_PAGE,
      }
    : {};

  const posts = await Posts.findAll({
    where: { SeriesId: seriesId },
    ...fieldForPagedQuery,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tags,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsBySearchKeyWord = async ({
  page,
  keyword,
}: {
  page: string;
  keyword: string;
}) => {
  const posts = await Posts.findAll({
    where: {
      title: {
        [Op.like]: "%" + decodeURIComponent(keyword) + "%",
      },
    },
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tags,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsByTag = async ({
  page,
  keyword,
}: {
  page: string;
  keyword: string;
}) => {
  const posts = await Posts.findAll({
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    include: [
      {
        model: Tags,
        where: { content: keyword },
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getCategoryPostsCount = async () => {
  const categoryCount = await Posts.findAll({
    attributes: [
      "category",
      [
        sequelizeConnection.fn("COUNT", Sequelize.col("Posts.category")),
        "count",
      ],
    ],
    group: ["Posts.category"],
  });
  return categoryCount;
};

const getPostsCount = async ({ category }: { category: string }) => {
  const where = category === "main" ? "" : `where category="${category}"`;
  const query = `select count(*) as count from Posts ${where}`;
  const [data, _] = await sequelizeConnection.query(query);
  return (data[0] as { count: number }).count;
};

const getAllPosts = async () => {
  const posts = await Posts.findAll({
    attributes: ["id", "title", "createdAt"],
    order: ORDER_BY_CREATED_AT,
  });
  return posts;
};

export default {
  getAllPostsId,
  getMainPosts,
  getCategoryPosts,
  getPostsBySearchKeyWord,
  getPostsBySeriesId,
  getPostsByTag,
  getCategoryPostsCount,
  getPostsCount,
  getAllPosts,
};
