import React from "react";
import TopViewsPosts from "../TopViewsPosts";
import styles from "./styles.module.scss";

const AdditionalInfoSectionLeft = () => {
  return (
    <div className={styles.SectionLeft}>
      <TopViewsPosts />
    </div>
  );
};

export default AdditionalInfoSectionLeft;
