const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleWare");
const postController = require("./postController");

router.post("/", isLoggedIn, postController.AddPost);
router.post("/:postId/comment", isLoggedIn, postController.addComment);
router.get("/load/:postId", postController.getPost);
router.delete("/:postId", isLoggedIn, postController.deletePost);
router.patch("/:postId", isLoggedIn, postController.updatePost);

module.exports = router;
