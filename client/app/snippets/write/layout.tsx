import PageLayout from "@components/shared/PageLayout";
import WithAdminOnServer from "@components/shared/WithAdmin/WithAdminOnServer";
import { notFound } from "next/navigation";
import React, { PropsWithChildren } from "react";

const SnippetsWritePageLayout = ({ children }: PropsWithChildren) => {
  return (
    <PageLayout type="NonFlex">
      <WithAdminOnServer onInvalid={notFound}>{children}</WithAdminOnServer>
    </PageLayout>
  );
};

export default SnippetsWritePageLayout;
