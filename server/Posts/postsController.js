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

const getCategoryPostsCount = async (req, res, next) => {
  try {
    const categoryCount = await postsService.getCategoryPostsCount();
    res.status(200).json(categoryCount);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsBySearchKeyWord = async (req, res, next) => {
  const { keyword } = req.params;
  try {
    const posts = await postsService.getPostsBySearchKeyWord({ keyword });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
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

const getPostsLength = async (req, res, next) => {
  const { category } = req.params;
  try {
    const length = await postsService.getPostsCount({ category });
    res.status(200).json({ length });
  } catch (err) {
    console.error(err);
    next(err);
  }
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
  getPostsLength,
  getCategoryPostsCount,
  getPostsBySearchKeyWord,
  GetPostsByTag,
  GetTopViewsPosts,
};
