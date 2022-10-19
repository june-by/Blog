const express = require("express");
const router = express.Router();
const tagController = require("./tagController");

router.get("/recent", tagController.getRecentTags);

module.exports = router;
