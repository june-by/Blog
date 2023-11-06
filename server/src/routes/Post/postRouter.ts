import express from "express";
import postController from "./postController";
import { cacheClearMiddleWare, isAdmin } from "@middleware";
const router = express.Router();

router.post("/", isAdmin, cacheClearMiddleWare("post"), postController.AddPost);

router.get("/load/:postId", postController.getPost);

router.get("/load/viewCount/:postId", postController.getPostViewCount);

router.post(
  "/delete/:postId",
  isAdmin,
  cacheClearMiddleWare("post"),
  postController.deletePost
);

router.post(
  "/edit/:postId",
  isAdmin,
  cacheClearMiddleWare("post"),
  postController.updatePost
);

export default router;
