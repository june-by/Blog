import PageLayout from "@components/shared/PageLayout";
import React, { PropsWithChildren } from "react";

const SnippetPostLayout = ({ children }: PropsWithChildren) => {
  return <PageLayout type="PostPage">{children}</PageLayout>;
};

export default SnippetPostLayout;
