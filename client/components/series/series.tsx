import { useGetAllSeires } from "Hooks/Series";
import LoadingOrNot from "components/_hoc/LoadingOrNot";
import SeriesPageLayout from "components/shared/PageLayout/SeriesPageLayout";
import React from "react";

const SeriesPageContainer = () => {
  const { data, isLoading } = useGetAllSeires();
  console.log("data : ", data);
  return (
    <LoadingOrNot isLoading={isLoading}>
      <SeriesPageLayout>
        <div>series</div>
      </SeriesPageLayout>
    </LoadingOrNot>
  );
};

export default SeriesPageContainer;
