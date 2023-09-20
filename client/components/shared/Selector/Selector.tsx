import React, { type HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLSelectElement> {
  value?: string | number;
  options: {
    key: string | number;
    value: string | number;
    text: string | number;
  }[];
}

const Selector = ({ onChange, value, className, options, ...props }: Props) => {
  return (
    <>
      <select
        onChange={onChange}
        className={classnames(styles.Selector, className)}
        value={value}
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
    </>
  );
};

export default Selector;
