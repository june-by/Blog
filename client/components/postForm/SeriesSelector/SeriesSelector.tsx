import React from "react";
import { useGetAllSeires } from "@hooks/query";
import Selector from "../FormItem/Selector";
import styles from "./styles.module.scss";
import { PostFormItemSharedType } from "../FormItem/type";
import SeriesCreateModalOpenButton from "./SeriesCreateModalOpenButton";

const SeriesSelector = <T extends Record<string, any>>(
  props: PostFormItemSharedType<T>
) => {
  const { data } = useGetAllSeires();

  if (!data) {
    return null;
  }

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
        <Selector
          {...props}
          options={seriesOptions}
          valueConverter={(value: string) => Number(value)}
        />
        <SeriesCreateModalOpenButton />
      </div>
    </div>
  );
};

export default SeriesSelector;
