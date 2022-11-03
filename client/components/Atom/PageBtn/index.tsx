import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

interface Props {
  idx: number | string;
  currentPage: number;
  onClickPageBtn: (idx: number | string) => () => void;
}

const PageBtn = ({ idx, currentPage, onClickPageBtn }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      data-testid="pageBtn"
      style={getPageBtnStyle(currentPage, idx, theme)}
      onClick={onClickPageBtn(idx)}
      className={`${styles.PageBtn} ${styles[theme]}`}
    >
      {idx}
    </button>
  );
};

export const getPageBtnStyle = (currentPage: number, idx: number | string, theme: any) => {
  if (currentPage === idx) {
    if (theme === "light") return { background: "#0099fa", color: "white" };
    else return { background: "#3e4756" };
  }
  return {};
};

export default PageBtn;
