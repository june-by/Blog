import model from "models";
import { Sequelize } from "sequelize";
const { Tag, sequelize, Post } = model;

const createTags = async ({ tagArr }: { tagArr: string[] }) => {
  const result = await Promise.all(
    tagArr.map((tag) =>
      Tag.findOrCreate({
        where: { content: tag.toLowerCase() },
      })
    )
  );
  return result;
};

const getAllTags = async () => {
  const tags = await Tag.findAll({
    attributes: {
      include: ["content"],
    },
    include: [
      {
        model: Post,
        attributes: ["id"],
      },
    ],
  });
  return tags;
};

export default {
  createTags,
  getAllTags,
};
