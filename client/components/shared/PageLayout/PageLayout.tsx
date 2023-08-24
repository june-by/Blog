import React from "react";
import styles from "./styles.module.scss";
import SwitchCase from "../SwitchCase";

interface Props {
  url: string;
  children: JSX.Element;
}

const PageLayout = ({ children, url }: Props) => {
  const contentLayoutClassName = getClassNameFromUrl(url);
  return (
    <section className={styles.PageLayout}>
      <div className={contentLayoutClassName}>{children}</div>
    </section>
  );
};

const getClassNameFromUrl = (url: string) => {
  if (url.includes("/post/")) return styles.PostPageLayout;
  else if (url.includes("/series")) return styles.WithOutFlexLayout;
  else if (url.includes("/archives")) return styles.WithOutFlexLayout;
  return styles.WithFlexLayout;
};

export default PageLayout;
