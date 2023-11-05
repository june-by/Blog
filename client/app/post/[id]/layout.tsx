import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const PostPageLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.layout}>{children}</div>;
};

export default PostPageLayout;
