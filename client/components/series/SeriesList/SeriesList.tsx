import React from "react";
import SeriesListLayout from "./layout";
import SeriesCard from "./SeriesCard";
import { ServerURL } from "@constants";
import { AllSeriesAPIType } from "@Types/series";
import request from "@services/request";

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
    const data = await request<AllSeriesAPIType>({
      url: "/series",
      method: "get",
      cache: "force-cache",
    });
    return data;
  } catch (err) {
    return null;
  }
}

export default SeriesList;
