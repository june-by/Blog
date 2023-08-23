import React from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "components/shared/FontAppliedElement";

interface Props {
  title?: string;
  contentComponent: JSX.Element;
}

const ArchiveContent = ({ title, contentComponent }: Props) => {
  return (
    <section className={styles.ArchiveContent}>
      {title && <FontAppliedElement tagName="h3">{title}</FontAppliedElement>}
      {contentComponent}
    </section>
  );
};

export default ArchiveContent;
