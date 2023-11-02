import React from "react";
import SeriesListLayout from "./layout";
import SeriesCard from "./SeriesCard";
import { ServerURL } from "@constants";
import { AllSeriesAPIType } from "@Types/series";

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

async function getAllSeries() {
  try {
    const res = await fetch(`${ServerURL}/series`, { cache: "force-cache" });
    const seriesList: AllSeriesAPIType = await res.json();

    return seriesList;
  } catch (err) {
    return null;
  }
}

export default SeriesList;
