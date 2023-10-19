import express from "express";
import postsController from "./postsController";
import { cacheMiddleware } from "@middleware";
const router = express.Router();

router.get("/load/id", postsController.getAllPostsId);

router.get(
  "/load/main/:page",
  cacheMiddleware(60),
  postsController.getMainPosts
);

router.get("/load/categoryLength", postsController.getCategoryPostsCount);

router.get("/load/length/:category", postsController.getPostsLength);

router.get("/load/:category/:page", postsController.getCategoryPosts);

router.get("/load/all", postsController.getAllPosts);

router.get("/series/:seriesTitle/:page", postsController.getSeriesPosts);

router.get("/search/:keyword/:page", postsController.getPostsBySearchKeyWord);

router.get("/tag/:keyword/:page", postsController.getPostsByTag);

export default router;
