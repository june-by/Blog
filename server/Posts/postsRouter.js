const express = require("express");
const router = express.Router();
const postsController = require("./postsController");

router.get("/load/main/:page", async (req, res, next) => {
  try {
    const posts = await postsController.GetMainPagePosts(req.params.page);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/load/categoryLength", async (req, res, next) => {
  try {
    const categoryCount = await postsController.GetCategoryLength();
    res.status(200).json(categoryCount);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/load/length/:category", async (req, res, next) => {
  try {
    const posts = await postsController.GetPostsLength(req.params.category);
    res.status(200).json({ length: posts.length });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/load/:category/:page", async (req, res, next) => {
  try {
    const { category, page } = req.params;
    const posts = await postsController.GetCategoryPosts(category, page);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/search/:keyword", async (req, res, next) => {
  try {
    const { keyword } = req.params;
    const posts = await postsController.GetPostsBySearchKeyword(keyword);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/tag/:keyword", async (req, res, next) => {
  try {
    const { keyword } = req.params;
    const posts = await postsController.GetPostsByTag(keyword);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
