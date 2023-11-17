import PageLayout from "@components/shared/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import React, { PropsWithChildren } from "react";

const SnippetsListPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <PageLayout type="NonFlex">
      <PageTitle
        title="🧑‍💻 Snippets"
        description="개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다."
      />
      {children}
    </PageLayout>
  );
};

export default SnippetsListPageLayout;
