import React from "react";
import ScrollToTopButton from "components/shared/ScrollToTopButton";
import SeriesPageContainer from "components/series";
import CommonSEO from "components/shared/CommonSEO";

const Series = () => {
  return (
    <>
      <CommonSEO
        title="Series | Byjuun.com"
        description="시리즈 목록"
        ogImage="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
      />
      <SeriesPageContainer />
      <ScrollToTopButton />
    </>
  );
};

export default Series;
