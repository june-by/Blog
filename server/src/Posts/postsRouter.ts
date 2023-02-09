import express from "express";
import postsController from "./postsController";
const router = express.Router();

router.get("/load/id", postsController.getAllPostsId);

router.get("/load/main/:page", postsController.getMainPosts);

router.get("/load/categoryLength", postsController.getCategoryPostsCount);

router.get("/load/length/:category", postsController.getPostsLength);

router.get("/load/:category/:page", postsController.getCategoryPosts);

router.get("/search/:keyword/:page", postsController.getPostsBySearchKeyWord);

router.get("/tag/:keyword/:page", postsController.getPostsByTag);

router.get("/topViews", postsController.getTopViewsPosts);

export default router;
