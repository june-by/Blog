import express from "express";
import { isLoggedIn } from "../../middleWare";
import postController from "./postController";
const router = express.Router();

router.post("/", isLoggedIn, postController.AddPost);

router.post("/:postId/comment", isLoggedIn, postController.addComment);

router.get("/load/:postId", postController.getPost);

router.delete("/:postId", isLoggedIn, postController.deletePost);

router.patch("/:postId", isLoggedIn, postController.updatePost);

export default router;
