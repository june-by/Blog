const { Post, Comment, User, Tag, sequelize } = require("../models");

const createPost = async ({ title, category, content, thumbNailUrl }) => {
  const post = await Post.create({
    title: title,
    category: category,
    content: content,
    thumbNailUrl: thumbNailUrl,
    views: 0,
  });
  return post;
};

const deletePost = async ({ postId }) => {
  await Post.destroy({
    where: { id: postId },
  });
};

const addTags = async ({ post, result }) => {
  await post.addTags(result.map((v) => v[0]));
};

module.exports = { createPost, addTags, deletePost };
