import React from "react";
import FontAppliedElement from "../FontAppliedElement";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
}

const PageTitle = ({ title, description }: Props) => {
  return (
    <div className={styles.PageTitle}>
      <FontAppliedElement tagName="h2" className={styles.title}>
        {title}
      </FontAppliedElement>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default PageTitle;
