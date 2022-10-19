const { sequelize } = require("../models");
const tagService = require("./tagService");

const getRecentTags = async (req, res, next) => {
  try {
    const recentTags = await tagService.getRecentTags();
    return res.status(201).json(recentTags);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  getRecentTags,
};
