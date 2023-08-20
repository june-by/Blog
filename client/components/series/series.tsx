import { useGetAllSeires } from "Hooks/Series";
import LoadingOrNot from "components/shared/LoadingOrNot";
import SeriesPageLayout from "components/shared/PageLayout/SeriesPageLayout";
import React from "react";
import SeriesList from "./SeriesList";
import { AllSeriesAPIType } from "Types/series";
import PageTitle from "components/shared/PageTitle/PageTitle";

const SeriesPageContainer = () => {
  const { data, isLoading } = useGetAllSeires();
  return (
    <LoadingOrNot isLoading={isLoading}>
      <SeriesPageLayout>
        <>
          <PageTitle
            title="✍️ Series"
            description="시리즈로 작성된 포스트들을 모아놓았습니다 😄"
          />
          {/* <FontAppliedElement tagName="h2">✍️ Series</FontAppliedElement>
          <span>시리즈로 작성된 포스트들을 모아놓았습니다😄</span> */}
          <SeriesList data={data as AllSeriesAPIType} />
        </>
      </SeriesPageLayout>
    </LoadingOrNot>
  );
};

export default SeriesPageContainer;
