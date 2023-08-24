import React from "react";
import styles from "./styles.module.scss";
import SwitchCase from "../SwitchCase";

interface Props {
  url: string;
  children: JSX.Element;
}

const PageLayout = ({ children, url }: Props) => {
  return (
    <section className={styles.PageLayout}>
      <LayoutForContent url={url}>{children}</LayoutForContent>
    </section>
  );
};

const getMainPathFromUrl = (url: string) => {
  if (url.includes("/post/")) return "withFlex";
  else if (url.includes("/series")) return "withoutFlex";
  else if (url.includes("/archives")) return "withoutFlex";
  return "posts";
};

const LayoutForContent = ({ url, children }: Props) => {
  const mainPath = getMainPathFromUrl(url);

  return (
    <SwitchCase
      value={mainPath}
      caseBy={{
        posts: <section className={styles.PostsPageLayout}>{children}</section>,
        withFlex: (
          <section className={styles.WithFlexLayout}>{children}</section>
        ),
        withoutFlex: (
          <section className={styles.WithOutFlexLayout}>{children}</section>
        ),
      }}
    />
  );
};

export default PageLayout;
