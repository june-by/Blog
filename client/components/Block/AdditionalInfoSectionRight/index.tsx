import React from "react";
import RecentComment from "../RecentComment";
import RecentTags from "../RecentTags";
import styles from "./styles.module.scss";

const AdditionalInfoSectionRight = () => {
  return (
    <div className={styles.SectionRight}>
      <RecentComment />
      <RecentTags />
    </div>
  );
};

export default AdditionalInfoSectionRight;
