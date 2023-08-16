import React from "react";
import styles from "./styles.module.scss";
import PageLayout from "../PageLayout";

interface Props {
  children: JSX.Element;
}

const PostPageLayout = ({ children }: Props) => {
  return (
    <PageLayout>
      <main className={styles.PostWrap}>{children}</main>
    </PageLayout>
  );
};

export default PostPageLayout;
