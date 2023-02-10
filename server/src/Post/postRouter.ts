import express from "express";
import { isAdmin } from "middleWare/isAdmin";
import { isLoggedIn } from "middleWare/isLoggedIn";
import postController from "./postController";
const router = express.Router();

router.post("/", isAdmin, postController.AddPost);

router.post("/:postId/comment", isLoggedIn, postController.addComment);

router.get("/load/:postId", postController.getPost);

router.get("/load/comment/:postId", postController.getPostComments);

router.delete("/:postId", isAdmin, postController.deletePost);

router.patch("/:postId", isAdmin, postController.updatePost);

export default router;
