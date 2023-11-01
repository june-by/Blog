import { useModals } from "@hooks";
import React from "react";
import styles from "./styles.module.scss";
import { MODALS } from "@components/shared/Modals/Modals";

const SeriesCreateModalOpenButton = () => {
  const { openModal } = useModals();

  return (
    <>
      <button
        className={styles.SeriesCreateModalOpenButton}
        onClick={() => openModal(MODALS.SERIES_FORM)}
      >
        시리즈 생성
      </button>
    </>
  );
};

export default SeriesCreateModalOpenButton;
