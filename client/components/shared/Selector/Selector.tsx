import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  options: {
    key: string | number;
    value: string | number;
    text: string | number;
  }[];
}

const Selector = ({ onChange, className, options, ...props }: Props) => {
  return (
    <>
      <select
        onChange={onChange}
        className={classnames(styles.Selector, className)}
        {...props}
      >
        <option disabled selected>
          → select an option ←
        </option>
        {options.map(({ text, ...params }) => (
          <option {...params}>{text}</option>
        ))}
      </select>
    </>
  );
};

export default Selector;
