import { Series, Posts } from "src/database";
import { ORDER_BY_CREATED_AT } from "src/constants";
import {
  PostAttribute,
  SeriesAttribute,
  SeriesCreationAttribute,
} from "src/types";

const getAllSeries = async () => {
  const series = await Series.findAll({
    order: ORDER_BY_CREATED_AT,
    include: [{ model: Posts, attributes: ["id", "title"] }],
  });
  return series;
};

const getSeriesIdByTitle = async ({
  title,
}: Pick<SeriesAttribute, "title">) => {
  const series = await Series.findOne({
    where: { title },
  });
  return series?.id;
};

const getSeriesTitleById = async ({
  SeriesId: id,
}: Pick<PostAttribute, "SeriesId">) => {
  const series = await Series.findOne({
    where: { id },
  });
  return series?.title;
};
const addSeries = async (seriesCreationAttribute: SeriesCreationAttribute) => {
  const series = await Series.create(seriesCreationAttribute);

  return series;
};

export default {
  getAllSeries,
  addSeries,
  getSeriesIdByTitle,
  getSeriesTitleById,
};
