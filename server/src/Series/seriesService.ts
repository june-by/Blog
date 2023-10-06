import { Series, Posts } from "models";
import { ORDER_BY_CREATED_AT } from "src/constants";

const getAllSeries = async () => {
  const series = await Series.findAll({
    order: ORDER_BY_CREATED_AT,
    include: [{ model: Posts, attributes: ["id", "title"] }],
  });
  return series;
};

const getSeriesIdByTitle = async ({ seriesTitle }: { seriesTitle: string }) => {
  const series = await Series.findOne({
    where: { title: seriesTitle },
  });
  return series?.id;
};

const getSeriesTitleById = async ({ seriesId }: { seriesId: string }) => {
  const series = await Series.findOne({
    where: { id: seriesId },
  });
  return series?.title;
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
  getSeriesIdByTitle,
  getSeriesTitleById,
};
