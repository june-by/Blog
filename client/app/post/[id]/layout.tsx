import React, { PropsWithChildren } from "react";
import PageLayout from "@components/shared/PageLayout";

const PostPageLayout = ({ children }: PropsWithChildren) => {
  return <PageLayout type="PostPage">{children}</PageLayout>;
};

export default PostPageLayout;
