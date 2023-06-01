import React from "react";
import styles from "./styles.module.scss";
const EtcCardLayout = ({ children }: { children?: JSX.Element }) => {
  return <div className={styles.Card}>{children}</div>;
};

export default EtcCardLayout;
