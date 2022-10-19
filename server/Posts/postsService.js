const { Post, Tag, sequelize } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getMainPosts = async ({ page }) => {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
    limit: 16,
    offset: (page - 1) * 16,
    attributes: ["id", "title", "category", "createdAt", "thumbNailUrl", "views"],
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getCategoryPosts = async ({ category, page }) => {
  const posts = await Post.findAll({
    where: { category: category },
    order: [["createdAt", "DESC"]],
    limit: 16,
    offset: (page - 1) * 16,
    attributes: ["id", "title", "category", "createdAt", "thumbNailUrl", "views"],
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsBySearchKeyWord = async ({ keyword }) => {
  const posts = await Post.findAll({
    where: {
      title: {
        [Op.like]: "%" + decodeURIComponent(keyword) + "%",
      },
    },
    attributes: {
      exclude: ["content", "updatedAt"],
    },
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  return posts;
};

const getPostsByTag = async ({ keyword }) => {
  const posts = await Post.findAll({
    attributes: {
      exclude: ["content", "updatedAt"],
    },
    include: [
      {
        model: Tag,
        where: { content: keyword },
        attributes: ["id", "content"],
      },
    ],
    order: [["createdAt", "DESC"]],
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

const getPostsCount = async ({ category }) => {
  const where = category === "main" ? "" : `where category="${category}"`;
  const query = `select count(*) as count from Posts ${where}`;
  const [data, _] = await sequelize.query(query);
  return data[0].count;
};

module.exports = { getMainPosts, getCategoryPosts, getPostsBySearchKeyWord, getPostsByTag, getCategoryPostsCount, getPostsCount };
