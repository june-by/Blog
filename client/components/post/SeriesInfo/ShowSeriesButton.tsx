import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import styles from "./styles.module.scss";

interface Props {
  toggleSeriesOpen: () => void;
  isSeriesOpen: boolean;
}

const ShowSeriesButton = ({ toggleSeriesOpen, isSeriesOpen }: Props) => {
  return (
    <button className={styles.showSeriesButton} onClick={toggleSeriesOpen}>
      {isSeriesOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      <span>{isSeriesOpen ? "숨기기" : "목록 보기"}</span>
    </button>
  );
};

export default ShowSeriesButton;
