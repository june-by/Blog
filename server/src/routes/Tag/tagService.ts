import { Tags, Posts } from "@database";

const createTags = async ({ tagArr }: { tagArr: string[] }) => {
  const result = await Promise.all(
    tagArr.map((tag) =>
      Tags.findOrCreate({
        where: { content: tag.toLowerCase() },
      })
    )
  );
  return result.map(([data]) => data);
};

const getAllTags = async () => {
  const tags = await Tags.findAll({
    attributes: {
      include: ["content"],
    },
    include: [
      {
        model: Posts,
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
