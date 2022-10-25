import model from "../../models";
const { User, Comment, Post } = model;

const addComment = async ({ comment, postId, userId }: { comment: string; postId: string; userId: string }) => {
  const newComment = await Comment.create({
    content: comment,
    PostId: parseInt(postId, 10),
    UserId: userId,
  });
  return newComment;
};

const getComment = async (commentId: number) => {
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

const commentService = { addComment, getComment, getRecentComments };
export default commentService;
