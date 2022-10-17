const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleWare");
const postController = require("./postController");

router.post("/", isLoggedIn, postController.AddPost);

router.post("/:postId/comment", isLoggedIn, postController.addComment);

router.get("/load/:postId", async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await postController.CheckPostExist(postId, res);
    const fullPost = await postController.GetPost(postId);
    const prev = await postController.GetPrevPostInfo(post.category, post.id);
    const next = await postController.GetNextPostInfo(post.category, post.id);
    const returnObj = {
      mainPost: fullPost,
      prevPost: prev,
      nextPost: next,
    };
    return res.status(201).json(returnObj);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId", isLoggedIn, postController.deletePost);

router.patch("/:postId", isLoggedIn, postController.updatePost);

module.exports = router;
