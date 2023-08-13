import model from "models";
const { Series, Post } = model;

const getAllSeries = async () => {
  const series = await Series.findAll({
    include: [{ model: Post, attributes: ["id", "title"] }],
  });
  return series;
};

const getSeries = async ({ seriesId }: { seriesId: string }) => {
  const series = await Series.findOne({
    where: { id: seriesId },
    include: [{ model: Post, attributes: { exclude: ["content"] } }],
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
  getSeries,
  addSeries,
};
