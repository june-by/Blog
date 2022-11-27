import model from "models";
import Sequelize from "sequelize";
const { Post, Tag, sequelize } = model;
const Op = Sequelize.Op;

const getMainPosts = async ({ page }: { page: string }) => {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
    limit: 16,
    offset: (Number(page) - 1) * 16,
    attributes: [
      "id",
      "title",
      "category",
      "createdAt",
      "thumbNailUrl",
      "views",
    ],
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getCategoryPosts = async ({
  category,
  page,
}: {
  page: string;
  category: string;
}) => {
  const posts = await Post.findAll({
    where: { category: category },
    order: [["createdAt", "DESC"]],
    limit: 16,
    offset: (Number(page) - 1) * 16,
    attributes: [
      "id",
      "title",
      "category",
      "createdAt",
      "thumbNailUrl",
      "views",
    ],
    include: [
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
};

const getPostsBySearchKeyWord = async ({ keyword }: { keyword: string }) => {
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

const getPostsByTag = async ({ keyword }: { keyword: string }) => {
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

const getCategoryPostsCount = async () => {
  const categoryCount = await Post.findAll({
    attributes: [
      "category",
      [Sequelize.fn("COUNT", Sequelize.col("Post.category")), "count"],
    ],
    group: ["Post.category"],
  });
  return categoryCount;
};

const getPostsCount = async ({ category }: { category: string }) => {
  const where = category === "main" ? "" : `where category="${category}"`;
  const query = `select count(*) as count from Posts ${where}`;
  const [data, _] = await sequelize.query(query);
  return data[0].count;
};

const getTopViewsPosts = async () => {
  const posts = await Post.findAll({
    order: [["views", "DESC"]],
    limit: 10,
    attributes: ["id", "title"],
  });
  return posts;
};

export default {
  getMainPosts,
  getCategoryPosts,
  getPostsBySearchKeyWord,
  getPostsByTag,
  getTopViewsPosts,
  getCategoryPostsCount,
  getPostsCount,
};
