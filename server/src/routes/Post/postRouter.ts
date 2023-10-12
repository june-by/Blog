import express from "express";
import { isAdmin } from "@middleware/isAdmin";
import postController from "./postController";
const router = express.Router();

router.post("/", isAdmin, postController.AddPost);

router.get("/load/:postId", postController.getPost);

router.get("/load/viewCount/:postId", postController.getPostViewCount);

router.delete("/:postId", isAdmin, postController.deletePost);

router.patch("/:postId", isAdmin, postController.updatePost);

export default router;
