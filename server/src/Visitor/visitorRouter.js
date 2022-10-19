const express = require("express");
const router = express.Router();
const visitorController = require("./visitorController");
const { addVisitor } = require("./visitorService");

router.get("/", visitorController.getVisitor);

router.post("/", addVisitor);

module.exports = router;
