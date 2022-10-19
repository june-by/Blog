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

const getPostsByTag = async (req, res, next) => {
  const { keyword } = req.params;
  try {
    const posts = await postsService.getPostsByTag({ keyword });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
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

const getTopViewsPosts = async (req, res, next) => {
  try {
    const posts = await postsService.getTopViewsPosts();
    return res.status(201).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  getMainPosts,
  getCategoryPosts,
  getPostsLength,
  getCategoryPostsCount,
  getPostsBySearchKeyWord,
  getPostsByTag,
  getTopViewsPosts,
};
