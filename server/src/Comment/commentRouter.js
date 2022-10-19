const express = require("express");
const router = express.Router();
const commentController = require("./commentController");

router.get("/recent", commentController.getRecentComment);

module.exports = router;
