import React from "react";
import styles from "./styles.module.scss";
import { usePostContext } from "context/postContext";
const SeriesInfo = () => {
  const {
    Post: { SeriesId },
  } = usePostContext();

  if (!SeriesId) return null;

  return <div className={styles.SeriesInfo}>SeriesInfo</div>;
};

export default SeriesInfo;
