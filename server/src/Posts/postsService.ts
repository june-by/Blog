import model from "models";
import Sequelize from "sequelize";
import { ORDER_BY_CREATED_AT } from "src/constants";
const { Post, Tag, sequelize } = model;
const Op = Sequelize.Op;

const POSTS_PER_PAGE = 20;

const DEFAULT_EXCLUDE_COLUMN = ["content", "updatedAt"];

const getAllPostsId = async () => {
  const posts = await Post.findAll({
    attributes: ["id"],
  });
  return posts;
};

const getMainPosts = async ({ page }: { page: string }) => {
  const posts = await Post.findAll({
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getCategoryPosts = async ({ category, page }: { page: string; category: string }) => {
  const posts = await Post.findAll({
    where: { category: category },
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsBySeriesId = async ({ page, seriesId }: { page: string; seriesId: number }) => {
  const posts = await Post.findAll({
    where: { seriesId },
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsBySearchKeyWord = async ({ page, keyword }: { page: string; keyword: string }) => {
  const posts = await Post.findAll({
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
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsByTag = async ({ page, keyword }: { page: string; keyword: string }) => {
  const posts = await Post.findAll({
    attributes: {
      exclude: DEFAULT_EXCLUDE_COLUMN,
    },
    order: ORDER_BY_CREATED_AT,
    limit: POSTS_PER_PAGE,
    offset: (Number(page) - 1) * POSTS_PER_PAGE,
    include: [
      {
        model: Tag,
        where: { content: keyword },
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getCategoryPostsCount = async () => {
  const categoryCount = await Post.findAll({
    attributes: ["category", [Sequelize.fn("COUNT", Sequelize.col("Post.category")), "count"]],
    group: ["Post.category"],
  });
  return categoryCount;
};

const getPostsCount = async ({ category }: { category: string }) => {
  const where = category === "main" ? "" : `where category="${category}"`;
  const query = `select count(*) as count from Posts ${where}`;
  const [data, _] = await sequelize.query(query);
  return data[0].count;
};

const getTopViewsPosts = async () => {
  const posts = await Post.findAll({
    order: [["views", "DESC"]],
    limit: 10,
    attributes: ["id", "title"],
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
  getTopViewsPosts,
  getCategoryPostsCount,
  getPostsCount,
};
