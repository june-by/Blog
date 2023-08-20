import model from "models";
import { ORDER_BY_CREATED_AT } from "src/constants";
const { Series, Post } = model;

const getAllSeries = async () => {
  const series = await Series.findAll({
    order: ORDER_BY_CREATED_AT,
    include: [{ model: Post, attributes: ["id", "title"] }],
  });
  return series;
};

const getSeriesIdByTitle = async ({ seriesTitle }: { seriesTitle: string }) => {
  const series = await Series.findOne({
    where: { title: seriesTitle },
  });
  return series.id;
};

interface AddSeriesParams {
  title: string;
  shortDescription: string;
  thumbNailUrl: string;
}

const addSeries = async ({ title, shortDescription, thumbNailUrl }: AddSeriesParams) => {
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
  getSeriesIdByTitle,
};
