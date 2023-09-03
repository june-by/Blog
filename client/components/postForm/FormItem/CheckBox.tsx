import React from "react";
import styles from "./styles.module.scss";
import { PostFormItemSharedType } from "./type";

type Props<T> = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> &
  PostFormItemSharedType<T>;

const CheckBox = <T extends Record<string, any>>({
  setState,
  stateKey,
  value,
  label,
  ...props
}: Props<T>) => {
  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      return {
        ...prev,
        [stateKey]: Number(e.target.checked),
      };
    });
  };
  return (
    <div className={styles.DivWithLabel}>
      {label && <label>{label}</label>}
      <input
        onChange={handleChangeCheckBox}
        className={styles.CheckBox}
        type="checkbox"
        {...props}
        checked={!!value}
      />
    </div>
  );
};

export default CheckBox;
