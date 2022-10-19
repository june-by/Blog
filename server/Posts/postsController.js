const { Post, Tag } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const postsService = require("./postsService");

const getMainPosts = async (req, res, next) => {
  const { page } = req.params;
  try {
    const posts = await postsService.getMainPosts({ page });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getCategoryPosts = async (req, res, next) => {
  const { page, category } = req.params;
  try {
    const posts = await postsService.getCategoryPosts({ page, category });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const GetCategoryLength = async () => {
  const categoryCount = await Post.findAll({
    attributes: ["category", [sequelize.fn("COUNT", sequelize.col("Post.category")), "count"]],
    group: ["Post.category"],
  });
  return categoryCount;
};

const GetPostsBySearchKeyword = async (keyword) => {
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

const GetPostsByTag = async (keyword) => {
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

const GetPostsLength = async (category) => {
  let posts;
  if (category !== "main") {
    posts = await Post.findAll({
      where: { category: category },
      attributes: ["id"],
    });
  } else {
    posts = await Post.findAll({
      attributes: ["id"],
    });
  }
  return posts;
};

const GetTopViewsPosts = async () => {
  const posts = await Post.findAll({
    order: [["views", "DESC"]],
    limit: 10,
    attributes: ["id", "title"],
  });
  return posts;
};

module.exports = {
  getMainPosts,
  getCategoryPosts,
  GetPostsLength,
  GetCategoryLength,
  GetPostsBySearchKeyword,
  GetPostsByTag,
  GetTopViewsPosts,
};
