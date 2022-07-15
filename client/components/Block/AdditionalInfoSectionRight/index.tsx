import React from "react";
import RecentComment from "../RecentComment";
import Visitor from "../Visitor";
import styles from "./styles.module.scss";

const AdditionalInfoSectionRight = () => {
  return (
    <div className={styles.SectionRight}>
      <Visitor />
      <RecentComment />
    </div>
  );
};

export default AdditionalInfoSectionRight;
