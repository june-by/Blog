import React from "react";
import SeriesListLayout from "./layout";
import { AllSeriesAPIType } from "Types/series";
import SeriesCard from "./SeriesCard";

interface Props {
  data: AllSeriesAPIType;
}

const SeriesList = ({ data }: Props) => {
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
