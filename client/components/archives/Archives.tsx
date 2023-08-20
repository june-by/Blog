import LoadingOrNot from "components/shared/LoadingOrNot";
import ArchivesPageLayout from "components/shared/PageLayout/ArchivesPageLayout/ArchivesPageLayout";
import PageTitle from "components/shared/PageTitle/PageTitle";
import React from "react";

const Archives = () => {
  return (
    <LoadingOrNot isLoading={false}>
      <ArchivesPageLayout>
        <>
          <PageTitle
            title="📑 Archives"
            description="모든 기록들을 한곳에 모아놓은 페이지입니다."
          />
        </>
      </ArchivesPageLayout>
    </LoadingOrNot>
  );
};

export default Archives;
