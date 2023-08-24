import React from "react";
import ArchivesPageContainer from "components/archives/Archives";
import CommonSEO from "components/shared/CommonSEO";

const Archives = () => {
  return (
    <>
      <CommonSEO
        title="Archives | Byjuun.com"
        description="모든 기록물을 모아놓은 페이지입니다."
        ogImage="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Original.png"
      />
      <ArchivesPageContainer />
    </>
  );
};

export default Archives;
