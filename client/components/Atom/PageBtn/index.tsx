import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  idx: number | string;
  currentPage: number;
  onClickPageBtn: (idx: any) => () => void;
}

const PageBtn = ({ idx, currentPage, onClickPageBtn }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      style={{
        background: currentPage === idx ? (theme === "light" ? "#0099fa" : "#3e4756") : "",
        color: currentPage === idx ? "white" : "",
      }}
      onClick={onClickPageBtn(idx)}
      className={`${styles.PageBtn} ${styles[theme]}`}
    >
      {idx}
    </button>
  );
};

export default PageBtn;
