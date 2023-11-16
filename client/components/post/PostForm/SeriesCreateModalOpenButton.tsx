import { useOverlay } from "@hooks";
import React from "react";
import styles from "./styles.module.scss";
import { OVERLAYS } from "@components/shared/Overlays/Overlays";
import Button from "@components/shared/Form/Button";

const SeriesCreateModalOpenButton = () => {
  const { openOverlay } = useOverlay();

  return (
    <Button
      type="button"
      className={styles.SeriesCreateModalOpenButton}
      onClick={() => openOverlay(OVERLAYS.SERIES_FORM_MODAL)}
    >
      시리즈 생성
    </Button>
  );
};

export default SeriesCreateModalOpenButton;
