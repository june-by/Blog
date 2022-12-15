import React from "react";

import Visitor from "components/Block/Visitor";
import TopViewsPosts from "components/Block/TopViewsPosts";
import styles from "./styles.module.scss";

const AdditionalInfoSectionLeft = () => {
  return (
    <aside data-testid="additionalInfoSectionLeft" className={styles.SectionLeft}>
      <Visitor />
      <TopViewsPosts />
    </aside>
  );
};

export default AdditionalInfoSectionLeft;
