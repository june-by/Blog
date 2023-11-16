import React, { SelectHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";

type StringOrNumber = string | number;
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: {
    text: StringOrNumber;
    value: StringOrNumber;
    key: StringOrNumber;
  }[];
}

const Selector = forwardRef(
  (
    { options, label, ...props }: Props,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <div className={styles.DivWithLabel}>
        {label && <label>{label}</label>}
        <select ref={ref} className={styles.Selector} {...props}>
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
  }
);

export default Selector;
