import React from "react";
import styles from "./styles.module.scss";
interface Props {
  children: JSX.Element;
}

const PostPageLayout = ({ children }: Props) => {
  return <main className={styles.PostWrap}>{children}</main>;
};

export default PostPageLayout;
