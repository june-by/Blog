import PageLayout from "@components/shared/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import React, { PropsWithChildren } from "react";

const ArchiveLayout = ({ children }: PropsWithChildren) => {
  return (
    <PageLayout type="NonFlex">
      <PageTitle
        title="📑 Archives"
        description="모든 기록들을 한곳에 모아놓은 페이지입니다."
      />
      {children}
    </PageLayout>
  );
};

export default ArchiveLayout;
