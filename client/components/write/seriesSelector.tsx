import React from "react";
import styles from "./@styles.module.scss";
import { useGetAllSeires } from "Hooks/Series";
import { useWriteContext } from "context/writeContext";
import Selector from "components/shared/Selector";
import SeriesCreateModalOpenButton from "components/postForm/SeriesSelector/SeriesCreateModalOpenButton";

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
        <SeriesCreateModalOpenButton />
      </div>
    </div>
  );
};

export default SeriesSelector;
