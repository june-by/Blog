import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import PageLayout from "@components/shared/PageLayout";

const PostPageLayout = ({ children }: PropsWithChildren) => {
  return <PageLayout type="PostPage">{children}</PageLayout>;
};

export default PostPageLayout;
