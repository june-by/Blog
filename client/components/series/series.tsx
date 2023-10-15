import React from "react";
import SeriesList from "./SeriesList";

import PageTitle from "@components/shared/PageTitle/PageTitle";

const SeriesPageContainer = () => {
  return (
    <>
      <PageTitle
        title="✍️ Series"
        description="시리즈로 작성된 포스트들을 모아놓았습니다 😄"
      />
      <SeriesList />
    </>
  );
};

export default SeriesPageContainer;
