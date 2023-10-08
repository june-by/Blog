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

const CLASS_MAPPER = {
  "/post/": styles.PostPageLayout,
  "/snippets/write": styles.WithOutFlexLayout,
  "/snippets/": styles.PostPageLayout,
  "/series": styles.WithOutFlexLayout,
  "/archives": styles.WithOutFlexLayout,
  "/snippets": styles.WithOutFlexLayout,
  "/about": styles.WithMaxWidth720px,
  "/write": styles.WithOutFlexLayout,
};

const getClassNameFromUrl = (url: string) => {
  for (const [targetURL, className] of Object.entries(CLASS_MAPPER)) {
    if (url.includes(targetURL)) {
      return className;
    }
  }
  return styles.WithFlexLayout;
};

export default PageLayout;
