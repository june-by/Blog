const { User, Comment, sequelize } = require("../models");
const addComment = async ({ comment, postId, userId }) => {
  const newComment = await Comment.create({
    content: comment,
    PostId: parseInt(postId, 10),
    UserId: userId,
  });
  return newComment;
};

const getComment = async (commentId) => {
  const fullComment = await Comment.findOne({
    where: { id: commentId },
    include: [
      {
        model: User,
        attributes: ["id", "nickname"],
      },
    ],
  });
  return fullComment;
};

const getRecentComments = async () => {
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
module.exports = { addComment, getComment, getRecentComments };
