import React from "react";
import { PostFormItemSharedType } from "./type";
import styles from "./styles.module.scss";

type Props<T> = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> &
  PostFormItemSharedType<T>;

const TextInput = <T extends Record<string, any>>({
  setState,
  stateKey,
  value,
  label,
  ...props
}: Props<T>) => {
  const handleChangeTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      return {
        ...prev,
        [stateKey]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.DivWithLabel}>
      {label && <label>{label}</label>}
      <input
        className={styles.TextInput}
        onChange={handleChangeTextInput}
        value={value}
        {...props}
      />
    </div>
  );
};

export default TextInput;
