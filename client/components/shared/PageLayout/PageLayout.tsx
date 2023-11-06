import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props {
  type: "Flex" | "NonFlex" | "WithMaxWidth720" | "PostPage";
}

const PageLayout = ({ children, type }: PropsWithChildren<Props>) => {
  const contentLayoutClassName = CLASS_MAPPER[type];
  return <div className={contentLayoutClassName}>{children}</div>;
};

const CLASS_MAPPER: Record<Props["type"], string> = {
  Flex: styles.WithFlexLayout,
  NonFlex: styles.WithOutFlexLayout,
  WithMaxWidth720: styles.WithMaxWidth720px,
  PostPage: styles.PostPageLayout,
};

export default PageLayout;
