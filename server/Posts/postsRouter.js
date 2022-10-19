const express = require("express");
const router = express.Router();
const postsController = require("./postsController");

router.get("/load/main/:page", postsController.getMainPosts);

router.get("/load/categoryLength", postsController.getCategoryPostsCount);

router.get("/load/length/:category", postsController.getPostsLength);

router.get("/load/:category/:page", postsController.getCategoryPosts);

router.get("/search/:keyword", postsController.getPostsBySearchKeyWord);

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

router.get("/topViews", async (req, res, next) => {
  try {
    const posts = await postsController.GetTopViewsPosts();
    return res.status(201).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
