const commentService = require("./commentService");

const getRecentComment = async (req, res, next) => {
  try {
    const recentComment = await commentService.getRecentComments();
    return res.status(201).json(recentComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  getRecentComment,
};
