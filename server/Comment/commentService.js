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

module.exports = { addComment, getComment };
