const express = require("express");
const router = express.Router();
const tagController = require("./tagController");

router.get("/recent", async (req, res, next) => {
  try {
    const recentTags = await tagController.GetRecentTags();
    return res.status(201).json(recentTags);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
