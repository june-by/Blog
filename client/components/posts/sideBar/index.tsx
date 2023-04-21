import React from "react";
import styles from "./styles.module.scss";

interface Props {
  renderItems: JSX.Element;
}

const SideBar = ({ renderItems }: Props) => {
  return <aside className={styles.sideBar}>{renderItems}</aside>;
};

export default SideBar;
