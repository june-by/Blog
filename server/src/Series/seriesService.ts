import model from "models";
const { Series, Post } = model;

const getAllSeries = async () => {
  const series = await Series.findAll({
    include: [{ model: Post, attributes: ["id", "title"] }],
  });
  return series;
};

interface AddSeriesParams {
  title: string;
  shortDescription: string;
  thumbNailUrl: string;
}

const addSeries = async ({
  title,
  shortDescription,
  thumbNailUrl,
}: AddSeriesParams) => {
  const series = await Series.create({
    title,
    shortDescription,
    thumbNailUrl,
  });

  return series;
};

export default {
  getAllSeries,
  addSeries,
};
