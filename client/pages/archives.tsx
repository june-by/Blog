import React from "react";
import ArchivesPageContainer from "components/archives/Archives";
import CommonSEO from "components/shared/CommonSEO";

const Archives = () => {
  return (
    <>
      <CommonSEO
        title="Archives | Byjuun.com"
        description="모든 기록물을 모아놓은 페이지입니다."
        ogUrl="https://byjuun.com/archives"
      />
      <ArchivesPageContainer />
    </>
  );
};

export default Archives;
