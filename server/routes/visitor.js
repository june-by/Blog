const express = require("express");
const router = express.Router();
const { Visitor, sequelize } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const nowDate = new Date();
    const DateInfo = String(nowDate.getFullYear()) + String(nowDate.getMonth()) + String(nowDate.getDate());
    const totalVisitor = await Visitor.count({});
    const todayVisitor = await Visitor.count({
      where: { date: DateInfo },
    });
    const returnObj = {
      totalVisitor: totalVisitor,
      todayVisitor: todayVisitor,
    };
    return res.status(201).json(returnObj);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const nowDate = new Date();
    const DateInfo = String(nowDate.getFullYear()) + String(nowDate.getMonth()) + String(nowDate.getDate());
    await Visitor.create({
      date: DateInfo,
    });
    res.send("OK");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
