import classNames from "classnames";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
