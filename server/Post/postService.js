const { Post, Comment, User, Tag, sequelize } = require("../models");

const getPost = async ({ postId }) => {
  const post = await Post.findOne({ where: { id: postId } });
  return post;
};

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

const updatePost = async ({ title, category, content, thumbNailUrl, postId }) => {
  await Post.update(
    {
      title: title,
      category: category,
      content: content,
      thumbNailUrl: thumbNailUrl,
    },
    {
      where: { id: postId },
    }
  );
};

const deletePost = async ({ postId }) => {
  await Post.destroy({
    where: { id: postId },
  });
};

const addTags = async ({ post, result }) => {
  await post.addTags(result.map((v) => v[0]));
};

const updateTags = async ({ post, result }) => {
  await post.setTags(result.map((v) => v[0]));
};

const isPostExists = async ({ postId }) => {
  const post = await Post.findOne({
    //게시글 존재하는지 확인
    where: { id: postId },
  });
  return post;
};

const addViewCount = async ({ postId, views }) => {
  await Post.update(
    {
      views: views + 1,
    },
    {
      where: { id: postId },
    }
  );
};

module.exports = { getPost, createPost, updatePost, addTags, updateTags, deletePost, addViewCount, isPostExists };
