import PageLayout from "@components/shared/PageLayout";
import React, { PropsWithChildren } from "react";

const WritePageLayout = ({ children }: PropsWithChildren) => {
  return <PageLayout type="NonFlex">{children}</PageLayout>;
};

export default WritePageLayout;
