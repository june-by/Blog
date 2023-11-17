import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const ErrorMsg = ({ children }: PropsWithChildren) => {
  return <span className={styles.errMsg}>{children}</span>;
};

export default ErrorMsg;
