const { Post, Tag } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

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

const getCategoryLength = async () => {
  const categoryCount = await Post.findAll({
    attributes: ["category", [sequelize.fn("COUNT", sequelize.col("Post.category")), "count"]],
    group: ["Post.category"],
  });
  return categoryCount;
};
module.exports = { getMainPosts, getCategoryPosts, getCategoryLength };
