import React from "react";
import styles from "./@styles.module.scss";
import { useGetAllSeires } from "Hooks/Series";
import SeriesFormModal from "components/_Modal/SeriesFormModal";
import { useWriteContext } from "context/writeContext";
import { useBooleanState } from "Hooks/useBooleanState";
import Selector from "components/shared/Selector";

const SeriesModalButton = () => {
  const [open, openModal, closeModal] = useBooleanState(false);

  return (
    <>
      <button onClick={openModal}>시리즈 생성</button>
      <SeriesFormModal isOpen={open} closeModal={closeModal} />
    </>
  );
};

const SeriesSelector = () => {
  const { data } = useGetAllSeires();
  const { handleChangeSeries } = useWriteContext();

  if (!data) return null;

  const seriesOptions = data.map(({ title, id }) => {
    return {
      key: title,
      value: id,
      text: title,
    };
  });

  return (
    <div className={styles.ShortDescription}>
      <label>시리즈</label>
      <div>
        <Selector onChange={handleChangeSeries} options={seriesOptions} />
        <SeriesModalButton />
      </div>
    </div>
  );
};

export default SeriesSelector;
