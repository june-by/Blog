import React, { ChangeEventHandler } from "react";
import styles from "./styles.module.scss";

type StringOrNumber = string | number;

interface Props {
  value: StringOrNumber | null;
  label?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options?: {
    key: StringOrNumber;
    value: StringOrNumber;
    text: StringOrNumber;
  }[];
}

const Selector = ({ options, value, onChange, label }: Props) => {
  return (
    <div className={styles.DivWithLabel}>
      {label && <label>{label}</label>}
      <select
        value={value ?? -1}
        onChange={onChange}
        className={styles.Selector}
      >
        <option disabled selected>
          → select an option ←
        </option>
        {options?.map(({ key, value, text }) => (
          <option key={key} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
