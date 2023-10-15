import { useBooleanState } from "@hooks";
import SeriesFormModal from "@components/postForm/SeriesSelector/SeriesFormModal";
import React from "react";
import styles from "./styles.module.scss";

const SeriesCreateModalOpenButton = () => {
  const [open, openModal, closeModal] = useBooleanState(false);

  return (
    <>
      <button
        className={styles.SeriesCreateModalOpenButton}
        onClick={openModal}
      >
        시리즈 생성
      </button>
      <SeriesFormModal isOpen={open} closeModal={closeModal} />
    </>
  );
};

export default SeriesCreateModalOpenButton;
