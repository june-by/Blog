import React from "react";
import { useGetAllSeires } from "Hooks/Series";
import SeriesFormModal from "components/postForm/SeriesSelector/SeriesFormModal";
import { useBooleanState } from "Hooks/useBooleanState";
import Selector from "components/shared/Selector";
import styles from "./styles.module.scss";
import { PostFormItemSharedType } from "../FormItem/type";

const SeriesModalButton = () => {
  const [open, openModal, closeModal] = useBooleanState(false);

  return (
    <>
      <button onClick={openModal}>시리즈 생성</button>
      <SeriesFormModal isOpen={open} closeModal={closeModal} />
    </>
  );
};

const SeriesSelector = <T extends Record<string, any>>({
  setState,
}: Pick<PostFormItemSharedType<T>, "setState">) => {
  const { data } = useGetAllSeires();

  if (!data) return null;

  const handleChangeSeries = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(setState);
    setState((prev) => {
      return {
        ...prev,
        SeriesId: Number(e.target.value),
      };
    });
  };

  const seriesOptions = data.map(({ title, id }) => {
    return {
      key: title,
      value: id,
      text: title,
    };
  });

  return (
    <div>
      <label>시리즈</label>
      <div className={styles.SeriesSelector}>
        <Selector onChange={handleChangeSeries} options={seriesOptions} />
        <SeriesModalButton />
      </div>
    </div>
  );
};

export default SeriesSelector;
