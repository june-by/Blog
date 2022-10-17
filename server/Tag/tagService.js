const { Post, Comment, User, Tag, sequelize } = require("../models");

const createTags = async ({ tagArr }) => {
  const result = await Promise.all(
    tagArr.map((tag) =>
      Tag.findOrCreate({
        where: { content: tag.toLowerCase() },
      })
    )
  );
  return result;
};

module.exports = {
  createTags,
};
