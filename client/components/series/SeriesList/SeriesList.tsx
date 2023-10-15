import React from "react";
import SeriesListLayout from "./layout";
import SeriesCard from "./SeriesCard";
import { useGetAllSeires } from "@hooks/query";

const SeriesList = () => {
  const { data, isLoading } = useGetAllSeires();

  if (!data || isLoading) {
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
