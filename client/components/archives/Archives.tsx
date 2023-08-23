import LoadingOrNot from "components/shared/LoadingOrNot";
import ArchivesPageLayout from "components/shared/PageLayout/ArchivesPageLayout";
import PageTitle from "components/shared/PageTitle/PageTitle";
import React from "react";
import ArchiveContent from "./ArchiveContent";
import Visitor from "./Visitor";

const Archives = () => {
  return (
    <ArchivesPageLayout>
      <>
        <PageTitle
          title="📑 Archives"
          description="모든 기록들을 한곳에 모아놓은 페이지입니다."
        />
        <ArchiveContent title="🙏 Visitor" contentComponent={<Visitor />} />
      </>
    </ArchivesPageLayout>
  );
};

export default Archives;
