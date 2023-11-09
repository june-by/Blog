import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "@components/shared/FontAppliedElement";

interface Props<T> {
  fetcher: () => Promise<T>;
  children: (data: T) => ReactNode;
  title: ((data: T) => string) | string;
}

const ArchiveContent = async <T extends Object>({
  fetcher,
  children,
  title,
}: Props<T>) => {
  const data = await fetcher();
  return (
    <section className={styles.ArchiveContent}>
      <FontAppliedElement tagName="h2">
        {typeof title === "string" ? title : title(data)}
      </FontAppliedElement>
      {children(data)}
    </section>
  );
};

export default ArchiveContent;
