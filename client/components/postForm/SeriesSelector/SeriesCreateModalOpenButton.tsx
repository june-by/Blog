import { useOverlay } from "@hooks";
import React from "react";
import styles from "./styles.module.scss";
import { OVERLAYS } from "@components/shared/Overlays/Overlays";

const SeriesCreateModalOpenButton = () => {
  const { openOverlay } = useOverlay();

  return (
    <button
      className={styles.SeriesCreateModalOpenButton}
      onClick={() => openOverlay(OVERLAYS.SERIES_FORM_MODAL)}
    >
      시리즈 생성
    </button>
  );
};

export default SeriesCreateModalOpenButton;
