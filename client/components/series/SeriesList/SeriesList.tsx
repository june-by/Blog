import React from "react";
import SeriesListLayout from "./layout";
import SeriesCard from "./SeriesCard";
import { getAllSeries } from "@services/series";

const SeriesList = async () => {
  const data = await getAllSeries();

  if (!data) {
    return null;
  }

  return (
    <SeriesListLayout>
      <>
        {data.map((seriesData) => (
          <SeriesCard key={seriesData.id} {...seriesData} />
        ))}
      </>
    </SeriesListLayout>
  );
};

export default SeriesList;
