import React from "react";
import RecentComment from "components/Block/RecentComment";
import RecentTags from "components/Block/RecentTags";
import styles from "./styles.module.scss";

const AdditionalInfoSectionRight = () => {
  return (
    <div
      data-testid="additionalInfoSectionRight"
      className={styles.SectionRight}
    >
      <RecentComment />
      <RecentTags />
    </div>
  );
};

export default AdditionalInfoSectionRight;
