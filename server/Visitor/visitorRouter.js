const express = require("express");
const router = express.Router();
const visitorController = require("./visitorController");

router.get("/", async (req, res, next) => {
  try {
    const visitor = await visitorController.GetVisitor();
    return res.status(201).json(visitor);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await visitorController.AddVisitor();
    const visitor = await visitorController.GetVisitor();
    return res.status(201).json(visitor);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
