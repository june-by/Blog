import express from "express";
import postsController from "./postsController";
const router = express.Router();

router.get("/load/main/:page", postsController.getMainPosts);

router.get("/load/categoryLength", postsController.getCategoryPostsCount);

router.get("/load/length/:category", postsController.getPostsLength);

router.get("/load/:category/:page", postsController.getCategoryPosts);

router.get("/search/:keyword", postsController.getPostsBySearchKeyWord);

router.get("/tag/:keyword", postsController.getPostsByTag);

router.get("/topViews", postsController.getTopViewsPosts);

export default router;
