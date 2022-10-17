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

const isPostExists = async ({ postId }) => {
  const post = await Post.findOne({
    //게시글 존재하는지 확인
    where: { id: postId },
  });
  return post;
};

module.exports = { createPost, addTags, deletePost, isPostExists };
