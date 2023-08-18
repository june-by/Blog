import React, { useCallback, useState } from "react";
import styles from "./@styles.module.scss";
import { useGetAllSeires } from "Hooks/Series";
import SeriesFormModal from "components/_Modal/SeriesFormModal";
import { useWriteContext } from "context/writeContext";

const SeriesModalButton = () => {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <button onClick={openModal}>시리즈 생성</button>
      <SeriesFormModal isOpen={open} closeModal={closeModal} />
    </>
  );
};

const SeriesSelector = () => {
  const { data } = useGetAllSeires();
  const {
    writeFormData: { SeriesId },
    handleChangeSeries,
  } = useWriteContext();

  const selectedSeries = data?.find((v) => v.id === SeriesId);

  return (
    <div className={styles.ShortDescription}>
      <label>시리즈</label>
      <div>
        <select onChange={handleChangeSeries} value={selectedSeries?.id}>
          <option disabled selected>
            {" "}
            -- select an option --{" "}
          </option>
          {data?.map((series) => (
            <option value={series.id} key={series.title}>
              {series.title}
            </option>
          ))}
        </select>
        <SeriesModalButton />
      </div>
    </div>
  );
};

export default SeriesSelector;
