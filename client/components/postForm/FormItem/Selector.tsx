import React from "react";
import styles from "./styles.module.scss";
import { PostFormItemSharedType } from "./type";

interface Props<T>
  extends Omit<React.HTMLAttributes<HTMLSelectElement>, "onChange">,
    PostFormItemSharedType<T> {
  options: {
    key: string | number;
    value: string | number;
    text: string | number;
  }[];
}

const Selector = <T extends Record<string, any>>({
  setState,
  stateKey,
  value,
  className,
  options,
  label,
  ...props
}: Props<T>) => {
  const handleChangeSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <select
        onChange={handleChangeSelector}
        className={styles.Selector}
        {...props}
      >
        <option disabled selected>
          → select an option ←
        </option>
        {options.map(({ text, key, value }) => (
          <option key={key} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
