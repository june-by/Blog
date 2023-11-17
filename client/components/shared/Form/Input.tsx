import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef(
  ({ label, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input
          className={classNames(styles.input, props.className)}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
