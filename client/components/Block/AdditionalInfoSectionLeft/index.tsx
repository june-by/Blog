import React from "react";

import Visitor from "components/Block/Visitor";
import TopViewsPosts from "components/Block/TopViewsPosts";
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
