import React from "react";
import RecentComment from "../RecentComment";
import Visitor from "../Visitor";
import styles from "./styles.module.scss";

const AdditionalInfoSection = () => {
  return (
    <div className={styles.DesktopRight}>
      <Visitor />
      <RecentComment />
    </div>
  );
};

export default AdditionalInfoSection;
