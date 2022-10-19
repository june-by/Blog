const { Post, Tag } = require("../models");

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
module.exports = { getMainPosts, getCategoryPosts };
