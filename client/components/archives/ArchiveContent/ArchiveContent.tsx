import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  contentComponent: JSX.Element;
}

const ArchiveContent = ({ title, contentComponent }: Props) => {
  return (
    <section className={styles.ArchiveContent}>
      <h3>{title}</h3>
      {contentComponent}
    </section>
  );
};

export default ArchiveContent;
