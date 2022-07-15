const express = require("express");
const router = express.Router();
const commentController = require("./commentController");

router.get("/recent", async (req, res, next) => {
  try {
    const recentComment = await commentController.GetRecentComment();
    return res.status(201).json(recentComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
