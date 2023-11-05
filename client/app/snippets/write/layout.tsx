import PageLayout from "@components/shared/PageLayout";
import React, { PropsWithChildren } from "react";

const SnippetsWritePageLayout = ({ children }: PropsWithChildren) => {
  return <PageLayout type="NonFlex">{children}</PageLayout>;
};

export default SnippetsWritePageLayout;
