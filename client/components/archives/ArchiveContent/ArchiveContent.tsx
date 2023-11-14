import React from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "@components/shared/FontAppliedElement";
import { ArchiveContentProps } from "./types";

const ArchiveContent = async <T extends Object>({
  fetcher,
  children,
  title,
}: ArchiveContentProps<T>) => {
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
