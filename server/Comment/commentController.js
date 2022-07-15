const { Post, Comment } = require("../models");

const GetRecentComment = async () => {
  const recentComment = await Comment.findAll({
    order: [["createdAt", "DESC"]],
    limit: 10,
    attributes: ["id", "content"],
    include: [
      {
        model: Post,
        attributes: ["id"],
      },
    ],
  });
  return recentComment;
};

module.exports = {
  GetRecentComment,
};
