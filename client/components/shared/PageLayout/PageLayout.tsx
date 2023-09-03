import React from "react";
import styles from "./styles.module.scss";

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
  else if (url.includes("/snippets")) return styles.WithOutFlexLayout;
  else if (url.includes("/about")) return styles.WithMaxWidth720px;
  else if (url.includes("/write")) return styles.WithOutFlexLayout;
  return styles.WithFlexLayout;
};

export default PageLayout;
