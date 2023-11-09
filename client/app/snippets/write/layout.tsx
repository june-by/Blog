import PageLayout from "@components/shared/PageLayout";
import WithAdmin from "@components/shared/WithAdmin";
import { notFound } from "next/navigation";
import React, { PropsWithChildren } from "react";

const SnippetsWritePageLayout = ({ children }: PropsWithChildren) => {
  return (
    <PageLayout type="NonFlex">
      <WithAdmin onInvalid={notFound}>{children}</WithAdmin>
    </PageLayout>
  );
};

export default SnippetsWritePageLayout;
