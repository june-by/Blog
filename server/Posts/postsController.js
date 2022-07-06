const { Post, Tag } = require("../models");
const sequelize = require("sequelize");

const GetMainPagePosts = async (page) => {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
    limit: 16,
    offset: (page - 1) * 16,
    attributes: ["id", "title", "category", "createdAt", "thumbNailUrl"],
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const GetCategoryPosts = async (category, page) => {
  const posts = await Post.findAll({
    where: { category: category },
    order: [["createdAt", "DESC"]],
    limit: 16,
    offset: (page - 1) * 16,
    attributes: ["id", "title", "category", "createdAt", "thumbNailUrl"],
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const GetCategoryLength = async () => {
  const categoryCount = await Post.findAll({
    attributes: ["category", [sequelize.fn("COUNT", sequelize.col("Post.category")), "count"]],
    group: ["Post.category"],
  });
  return categoryCount;
};

const GetPostsBySearchKeyword = async (keyword) => {
  const posts = await Post.findAll({
    where: {
      title: {
        [Op.like]: "%" + decodeURIComponent(keyword) + "%",
      },
    },
    attributes: {
      exclude: ["content", "updatedAt"],
    },
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  return posts;
};

const GetPostsByTag = async (keyword) => {
  const posts = await Post.findAll({
    attributes: {
      exclude: ["content", "updatedAt"],
    },
    include: [
      {
        model: Tag,
        where: { content: keyword },
        attributes: ["id", "content"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  return posts;
};

const GetPostsLength = async (category) => {
  let posts;
  if (category !== "main") {
    posts = await Post.findAll({
      where: { category: category },
      attributes: ["id"],
    });
  } else {
    posts = await Post.findAll({
      attributes: ["id"],
    });
  }
  return posts;
};
module.exports = {
  GetMainPagePosts,
  GetCategoryPosts,
  GetPostsLength,
  GetCategoryLength,
  GetPostsBySearchKeyword,
  GetPostsByTag,
};
