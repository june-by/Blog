import { useGetAllSeires } from "Hooks/Series";
import LoadingOrNot from "components/_hoc/LoadingOrNot";
import SeriesPageLayout from "components/shared/PageLayout/SeriesPageLayout";
import React from "react";
import SeriesList from "./SeriesList";
import { AllSeriesAPIType } from "Types/series";

const SeriesPageContainer = () => {
  const { data, isLoading } = useGetAllSeires();
  console.log("data : ", data);
  return (
    <LoadingOrNot isLoading={isLoading}>
      <SeriesPageLayout>
        <SeriesList data={data as AllSeriesAPIType} />
      </SeriesPageLayout>
    </LoadingOrNot>
  );
};

export default SeriesPageContainer;
