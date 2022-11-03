import React from "react";
import TopViewsPosts from "../TopViewsPosts";
import Visitor from "../Visitor";
import styles from "./styles.module.scss";

const AdditionalInfoSectionLeft = () => {
  return (
    <div data-testid="additionalInfoSectionLeft" className={styles.SectionLeft}>
      <Visitor />
      <TopViewsPosts />
    </div>
  );
};

export default AdditionalInfoSectionLeft;
