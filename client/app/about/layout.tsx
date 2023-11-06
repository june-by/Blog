import PageLayout from "@components/shared/PageLayout";
import React, { PropsWithChildren } from "react";

const AboutPageLayout = ({ children }: PropsWithChildren) => {
  return <PageLayout type="WithMaxWidth720">{children}</PageLayout>;
};

export default AboutPageLayout;
